import { Score } from "./Score";

export class Frame {
  score: Score;
  rollCounter: number;

  constructor() {
    this.score = new Score();
    this.rollCounter = 0;
  }
}
