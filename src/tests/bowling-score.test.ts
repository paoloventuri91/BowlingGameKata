import { BowlingGame } from "./../BowlingGame";

test("A roll by 0 returns 0", () => {
  expect(BowlingGame.calculateScore([0])).toBe(0);
});

test("A roll by 1 returns 1", () => {
  expect(BowlingGame.calculateScore([1])).toBe(1);
});
