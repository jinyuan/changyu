import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Idiom} from "../models/Idiom";
import {IdiomsService} from "../providers/idioms.service";
import {interval, Subscription} from "rxjs";
import {GamePiece} from "../models/GamePiece";
import {Difficulty} from "../models/Difficulty";
import {faClipboard, faInfo, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit, AfterViewInit{

  constructor(private library: FaIconLibrary,
              private idiomService: IdiomsService,
              private modalService: BsModalService,
              private route: ActivatedRoute
              ) {
    library.addIcons(
      faStopwatch,
      faClipboard,
      faInfo,
      faGithub,
    );
  }

  ngAfterViewInit(): void {
    if (localStorage.getItem('page.visited') !== 'true') {
      localStorage.setItem('page.visited','true');
      this.openModal(this.helpModal);
    }
  }

  idioms: Map<string, Idiom>;
  gamePieces: Array<Array<GamePiece>>;
  selectedPieces = [];
  score: number = 0;
  gameStarted = false;
  timer: Subscription;
  difficulties: Array<Difficulty>;
  selectedDifficulty: Difficulty;
  secondsRemaining:number = 0;
  modalRef: BsModalRef | null;
  debug = false;
  @ViewChild('gameEndModal') gameEndModal: TemplateRef<any>;
  @ViewChild('helpModal') helpModal: TemplateRef<any>;


  ngOnInit(): void {
    this.idiomService.getDifficulties().subscribe((data) => {
      this.difficulties = data;
      this.selectedDifficulty = this.difficulties[1];
      this.resetGame();
    });
    interval(1000).subscribe((i)=> {
      if (this.gameStarted && this.secondsRemaining <= 0 ){
        this.stopGame();
      }
    });
    this.route.queryParams.subscribe(params => {
      this.debug = params['debug'] === 'true';
    });
  }

  pieceClick(gamePiece: GamePiece){
    if (!this.gameStarted) {
      this.startGame();
    }else {
      if (this.selectedPieces.length < 1) {
        gamePiece.selected = true;
        this.selectedPieces.push(gamePiece);

      } else if (this.selectedPieces.length === 1) {
        const previousPiece = this.selectedPieces.pop();

        if (previousPiece == gamePiece){
          gamePiece.selected = false;
        }else{
          this.swapPieces(previousPiece, gamePiece);
          previousPiece.selected = false;
          gamePiece.selected = false;
          this.validateBoard();
        }
      }
    }
  }

  swapPieces(piece1:GamePiece, piece2: GamePiece) {
    const tmpCharacter = piece1.character;
    const tmpPinyin = piece1.pinyin;
    piece1.character = piece2.character;
    piece1.pinyin = piece2.pinyin;
    piece2.character = tmpCharacter;
    piece2.pinyin = tmpPinyin;
  }

  populateBoard() {
    this.idiomService.getIdioms(this.selectedDifficulty).subscribe(
      (data) => {
        this.idioms = new Map<string, Idiom>();
        let pieces = new Array<GamePiece>();
        data.forEach(idiom => this.idioms.set(idiom.toString(), idiom));
        Promise.all(data.map(idiom => {
          pieces = pieces.concat(
            idiom.getCharacters()
              .map((x,i) => new GamePiece(x, idiom.getPinyins()[i]))
          )
        })).then(()=> {
          this.shuffle(pieces);
          this.gamePieces = this.chunkData(pieces, 4);
        });
      });
  }

  validateBoard() {
    this.gamePieces.forEach(row => {
      if(!row[0].disabled){
        Promise.all(row.map(piece => piece.character)).then((data => {
          if (this.idioms.has(data.join(''))) {
            this.score++;
            row.forEach(piece => piece.disabled = true);
            if (this.score === this.selectedDifficulty.numOfIdioms) {
              console.log("game ended");
              this.stopGame();
            }
          }
        }));
      }
    });
  }

  startGame() {
    this.populateBoard()
    this.gameStarted = true;
    this.secondsRemaining = this.selectedDifficulty.timeLimit;
    this.timer = interval(1000).subscribe((i) => {
      this.secondsRemaining-=1;
    });
  }

  stopGame() {
    this.gameStarted = false;
    this.timer.unsubscribe();
    this.openModal(this.gameEndModal);
  }

  resetGame() {
    this.timer ? this.timer.unsubscribe(): null;
    this.gameStarted = false;
    this.secondsRemaining = this.selectedDifficulty.timeLimit;
    this.score = 0;
    this.selectedPieces = [];
    this.populateBoard();
  }

  chunkData(array, size) {
    const result = [];

    while(array.length) {
      result.push(array.splice(0, size));
    }
    return result;
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  onDifficultyChange() {
    this.resetGame();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
