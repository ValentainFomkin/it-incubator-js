function spinningRings(innerMax, outerMax) {
  let inner = 0,
    outer = 0,
    step = 0;
  do {
    step++;
    inner--;
    outer++;
    if (inner < 0) inner = innerMax;
    if (outer > outerMax) outer = 0;
  } while (inner != outer);
  return step;
}
