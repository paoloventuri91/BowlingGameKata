import { Roll } from "./Roll";
import { Score } from "./Score";

export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let bowlingRolls: Roll[] = rolls.map((roll) => new Roll(roll));

    let score: Score = new Score(0);

    for (let index = 0; index < bowlingRolls.length; index++) {
      score.addValue(bowlingRolls[index].pins);
    }

    return score.value;
  }
}
