function isCoprime(x, y) {
  for (let i = 2; i <= Math.min(x, y); i++) {
    if (y % i == 0 && x % i == 0) {
      return false;
    }
  }
  return true;
}
