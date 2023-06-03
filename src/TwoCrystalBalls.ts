export default function twoCrystalBalls(breaks: boolean[]): number {
  let jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i, j;

  for (i = jumpAmount; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (j = 0; j < jumpAmount && j < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
