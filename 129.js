function countingValleys(s) {
  let result = 0,
    level = 0;
  for (let i of s) {
    if (i == 'U' && level == -1) {
      result++;
    }
    if (i != 'F') {
      if (i == 'U') {
        level++;
      } else {
        level--;
      }
    }
  }
  return result;
}
