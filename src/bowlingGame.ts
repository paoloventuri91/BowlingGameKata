export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let score: number = 0;

    for (let index = 0; index < rolls.length; index++) {
      score += rolls[index];
    }

    return score;
  }
}
