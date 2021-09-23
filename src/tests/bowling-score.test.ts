import { BowlingGame } from "./../BowlingGame";

test("A roll by 0 returns 0", () => {
  expect(BowlingGame.calculateScore([0, 0])).toBe(0);
});

test("A roll by 1 returns 1", () => {
  expect(BowlingGame.calculateScore([1, 0])).toBe(1);
});

test("A roll by 1 and 1 returns 2", () => {
  expect(BowlingGame.calculateScore([1, 1])).toBe(2);
});

test("All 1 rolls returns 20", () => {
  expect(
    BowlingGame.calculateScore([
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ])
  ).toBe(20);
});

test("A spare should return a bonus", () => {
  expect(BowlingGame.calculateScore([6, 4, 1, 0])).toBe(12);
});

test("A strike should return a double bonus", () => {
  expect(BowlingGame.calculateScore([10, 1, 3])).toBe(18);
});

test("All spare game should return 150", () => {
  expect(
    BowlingGame.calculateScore([
      5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    ])
  ).toBe(150);
});

test("All strike game should return 300", () => {
  expect(
    BowlingGame.calculateScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
  ).toBe(300);
});

test("Random game", () => {
  expect(
    BowlingGame.calculateScore([
      1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6,
    ])
  ).toBe(133);
});
