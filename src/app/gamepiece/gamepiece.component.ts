import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GamePiece} from "../models/GamePiece";

@Component({
  selector: 'app-gamepiece',
  templateUrl: './gamepiece.component.html',
  styleUrls: ['./gamepiece.component.css']
})
export class GamepieceComponent implements OnInit {
  @Input() data: GamePiece;
  @Output() clickEvent = new EventEmitter<GamePiece>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    this.clickEvent.emit(this.data);
  }

}
