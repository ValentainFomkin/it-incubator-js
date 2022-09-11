function amIWilson(p) {
  return (
    ((Array.from({ length: p - 1 }, (_, index) => index + 1).reduce(
      (prev, curr) => prev * curr,
      1
    ) +
      1) /
      (p * p)) %
      1 ==
    0
  );
}
