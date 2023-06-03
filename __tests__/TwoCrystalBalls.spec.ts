import twoCrystalBalls from "../src/TwoCrystalBalls";

test("Two Crystal Balls", () => {
  const size = 10_000;

  const data = new Array(size).fill(false);

  let randomIndex = Math.floor(Math.random() * size);

  for (let index = randomIndex; index < data.length; ++index) {
    data[index] = true;
  }

  expect(twoCrystalBalls(data)).toEqual(randomIndex);

  expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
});
