import { Roll } from "./Roll";

export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let bowlingRolls: Roll[] = rolls.map((roll) => new Roll(roll));

    let score: number = 0;

    for (let index = 0; index < bowlingRolls.length; index++) {
      score += bowlingRolls[index].pins;
    }

    return score;
  }
}
