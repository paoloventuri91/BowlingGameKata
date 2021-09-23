export class Score {
  value: number;

  constructor(value: number = 0) {
    this.value = value;
  }

  addValue(value: number): void {
    this.value += value;
  }

  canIHaveBonus(): boolean {
    return this.value == 10;
  }
}
