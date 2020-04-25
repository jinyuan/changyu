class Difficulty {

  name: string;
  numOfIdioms: number;
  timeLimit: number;
  startRange: number;
  endRange: number;

  constructor(name: string,
              numOfIdioms: number,
              timeLimit: number,
              startRange: number,
              endRange: number) {

    this.name = name;
    this.numOfIdioms = numOfIdioms;
    this.timeLimit = timeLimit;
    this.startRange = startRange;
    this.endRange = endRange;
  }
}

export {Difficulty};
