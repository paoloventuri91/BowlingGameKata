import { Roll } from "./Roll";
import { Score } from "./Score";

export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let bowlingRolls: Roll[] = rolls.map((roll) => new Roll(roll));

    let score: Score = new Score();
    let frameScore: Score = new Score();
    let frameRollCounter: number = 0;

    for (let index = 0; index < bowlingRolls.length; index++) {
      score.addValue(bowlingRolls[index].pins);
      frameScore.addValue(bowlingRolls[index].pins);
      frameRollCounter++;

      if (frameScore.value == 10) score.addValue(bowlingRolls[index + 1].pins);
      if (frameScore.value == 10 || frameRollCounter == 2) {
        frameScore = new Score();
        frameRollCounter = 0;
      }
    }

    return score.value;
  }
}
