import { BowlingGame } from "./../BowlingGame";

test("A roll by 0 returns 0", () => {
  expect(BowlingGame.calculateScore([0])).toBe(0);
});
