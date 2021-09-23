import { Roll } from "./Roll";

export class BowlingRolls {
  rolls: Roll[];
  index: number;

  constructor(rolls: Roll[]) {
    this.rolls = rolls;
    this.index = 0;
  }

  takeARoll(): Roll {
    let roll: Roll = this.rolls[this.index];
    this.index++;

    return roll;
  }

  getNext(): Roll {
    return this.rolls[this.index];
  }

  canTakeARoll(): boolean {
    return this.rolls.length > this.index;
  }
}
