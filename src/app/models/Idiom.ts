class Idiom {

  private characters: Array<string>;
  private pinyins: Array<string>;
  private idiom: string;
  private pinyin: string;

  constructor(idiom: string, pinyin: string) {
    if(idiom.length !== 4) { throw new Error("invalid idiom length"); }
    this.idiom = idiom.normalize();
    this.pinyin = pinyin;
    this.characters = idiom.split('');
    this.pinyins = pinyin.split(' ');
  }

  public equals(obj: Idiom): boolean {
    return this.idiom === obj.idiom;
  }

  public getCharacters(): Array<string> {
    return this.characters;
  }

  public getPinyins(): Array<string> {
    return this.pinyins;
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
