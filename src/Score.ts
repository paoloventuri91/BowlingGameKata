export class Score {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  addValue(value: number): void {
    this.value += value;
  }
}
