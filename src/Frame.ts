import { Roll } from "./Roll";
import { Score } from "./Score";

export class Frame {
  score: Score;
  rollCounter: number;

  constructor() {
    this.score = new Score();
    this.rollCounter = 0;
  }

  isComplete(): boolean {
    return this.score.canIHaveBonus() || this.rollCounter == 2;
  }

  addRoll(roll: Roll): void {
    this.score.addScore(new Score(roll.pins));
    this.rollCounter++;
  }

  isStrike() {
    return this.rollCounter == 1 && this.score.canIHaveBonus();
  }
}
