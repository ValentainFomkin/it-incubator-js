function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForFactor(4, 3));
// ИЛИ
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}
