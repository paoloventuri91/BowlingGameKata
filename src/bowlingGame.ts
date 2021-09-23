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

      if (BowlingGame.isFrameComplete(frame.score, frame.rollCounter)) {
        frame = new Frame();
      }
    }

    return score.value;
  }

  private static isFrameComplete(frameScore: Score, frameRollCounter: number) {
    return frameScore.canIHaveBonus() || frameRollCounter == 2;
  }
}
