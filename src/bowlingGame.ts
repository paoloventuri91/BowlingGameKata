import { Frame } from "./Frame";
import { Roll } from "./Roll";
import { Score } from "./Score";

export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let bowlingRolls: Roll[] = rolls.map((roll) => new Roll(roll));

    let score: Score = new Score();
    let frame: Frame = new Frame();

    for (let index = 0; index < bowlingRolls.length; index++) {
      score.addValue(bowlingRolls[index].pins);
      frame.score.addValue(bowlingRolls[index].pins);
      frame.rollCounter++;

      if (frame.score.canIHaveBonus())
        score.addValue(bowlingRolls[index + 1].pins);

      if (frame.isComplete()) {
        frame = new Frame();
      }
    }

    return score.value;
  }
}
