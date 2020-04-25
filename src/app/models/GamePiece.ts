class GamePiece {

  character: string;
  selected: boolean;
  disabled: boolean;

  constructor(character: string) {
    this.character = character;
    this.selected = false;
    this.disabled = false;
  }
}

export {GamePiece};
