import { Score } from "./Score";
import { Roll } from "./Roll";

export class BowlingRolls {
  rolls: Roll[];
  index: number;

  constructor(rolls: number[]) {
    this.rolls = rolls.map((roll) => new Roll(roll));
    this.index = 0;
  }

  takeARoll(): Roll {
    let roll: Roll = this.rolls[this.index];
    this.index++;

    return roll;
  }

  getBonus(howMany: number): Score {
    let bonus: Score = new Score();

    for (let index = 0; index < howMany; index++) {
      bonus.addScore(new Score(this.rolls[this.index + index].pins));
    }

    return bonus;
  }

  canTakeARoll(): boolean {
    return this.rolls.length > this.index;
  }
}
