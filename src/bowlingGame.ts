import { BowlingRolls } from "./BowlingRolls";
import { Frame } from "./Frame";
import { Roll } from "./Roll";
import { Score } from "./Score";

export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let bowlingRolls: BowlingRolls = new BowlingRolls(rolls);

    let frames: Frame[] = [];
    let score: Score = new Score();
    let frame: Frame = new Frame();

    while (bowlingRolls.canTakeARoll() && frames.length <= 9) {
      let roll: Roll = bowlingRolls.takeARoll();

      frame.addRoll(roll);

      if (frame.isComplete()) {
        score.addScore(BowlingGame.getFrameScore(frame, bowlingRolls));

        frames.push(frame);
        frame = new Frame();
      }
    }

    return score.value;
  }

  private static getFrameScore(
    frame: Frame,
    bowlingRolls: BowlingRolls
  ): Score {
    let score: Score = new Score();

    if (frame.score.canIHaveBonus())
      score.addScore(BowlingGame.getBonus(frame, bowlingRolls));

    score.addScore(frame.score);

    return score;
  }

  private static getBonus(frame: Frame, bowlingRolls: BowlingRolls): Score {
    if (frame.isStrike()) return bowlingRolls.getBonus(2);

    return bowlingRolls.getBonus(1);
  }
}
