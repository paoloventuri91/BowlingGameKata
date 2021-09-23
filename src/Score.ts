export class Score {
  value: number;

  constructor(value: number = 0) {
    this.value = value;
  }

  addScore(score: Score): void {
    this.value += score.value;
  }

  canIHaveBonus(): boolean {
    return this.value == 10;
  }
}
