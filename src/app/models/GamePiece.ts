class GamePiece {

  character: string;
  pinyin: string;
  selected: boolean;
  disabled: boolean;

  constructor(character: string, pinyin: string) {
    this.character = character;
    this.pinyin = pinyin
    this.selected = false;
    this.disabled = false;
  }
}

export {GamePiece};
