function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n];
  }
}
console.log(multiply([2, 3, 4, 5], 3));

let res = 1;
function nFact(n) {
  if (n === 0) return;
  res = res * n;
  nFact(n - 1);
}
nFact(5);
console.log(res);
