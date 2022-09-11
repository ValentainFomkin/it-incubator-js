function passOrFail(harmony) {
  const h = harmony.map((c) => c.split(' '));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; ++j) {
      for (let k = j + 1; k < 4; ++k) {
        if (
          h[i][j] === h[i][k] &&
          h[i + 1][j] === h[i + 1][k] &&
          h[i][j] !== h[i + 1][j]
        ) {
          return 'Fail';
        }
      }
    }
  }

  return 'Pass';
}
