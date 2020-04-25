class Idiom {

  private characters: Array<string>;
  private idiom: string;

  constructor(idiom: string) {
    if(idiom.length !== 4) { throw new Error("invalid idiom length"); }
    this.idiom = idiom.normalize();
    this.characters = idiom.split('');
  }

  public equals(obj: Idiom): boolean {
    return this.idiom === obj.idiom;
  }

  public getCharacters(): Array<string> {
    return this.characters;
  }

  public toString(): string {
    return this.idiom;
  }

  public static shuffle(str: string): string {
    const a = str.split("")
    const n = a.length;

    for(let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }
}

export {Idiom};
