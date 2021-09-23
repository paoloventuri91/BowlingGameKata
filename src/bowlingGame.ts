import { BowlingRolls } from "./BowlingRolls";
import { Frame } from "./Frame";
import { Roll } from "./Roll";
import { Score } from "./Score";

export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let bowlingRolls: BowlingRolls = new BowlingRolls(rolls);

    let frames: Frame[] = [];
    let score: Score = new Score();
    let frame: Frame = new Frame(bowlingRolls);

    while (bowlingRolls.canTakeARoll() && frames.length <= 9) {
      let roll: Roll = bowlingRolls.takeARoll();

      frame.addRoll(roll);

      if (frame.isComplete()) {
        score.addScore(frame.getScore());

        frames.push(frame);
        frame = new Frame(bowlingRolls);
      }
    }

    return score.value;
  }
}
