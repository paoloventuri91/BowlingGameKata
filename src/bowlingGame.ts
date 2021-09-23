import { BowlingRolls } from "./BowlingRolls";
import { Frame } from "./Frame";
import { Roll } from "./Roll";
import { Score } from "./Score";

export class BowlingGame {
  public static calculateScore(rolls: number[]): number {
    let bowlingRolls: BowlingRolls = new BowlingRolls(
      rolls.map((roll) => new Roll(roll))
    );

    let score: Score = new Score();
    let frame: Frame = new Frame();

    while (bowlingRolls.canTakeARoll()) {
      let roll: Roll = bowlingRolls.takeARoll();

      score.addValue(roll.pins);
      frame.addRoll(roll);

      if (frame.score.canIHaveBonus())
        score.addValue(BowlingGame.getBonus(frame, bowlingRolls));

      if (frame.isComplete()) frame = new Frame();
    }

    return score.value;
  }

  private static getBonus(frame: Frame, bowlingRolls: BowlingRolls): number {
    if (frame.isStrike()) return bowlingRolls.getBonus(2).value;

    return bowlingRolls.getBonus(1).value;
  }
}
