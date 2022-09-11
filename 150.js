const racePodium = (blocks) =>
  ((second) =>
    blocks == 7 ? [2, 4, 1] : [second, second + 1, blocks - second * 2 - 1])(
    (blocks / 3 + 2 / 3) | 0
  );
