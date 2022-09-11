/*Очень просто: задано целое число или число с плавающей точкой, найдите его противоположность.

Примеры:

1: -1
14: -14
-34: 34*/

function opposite(number) {
  if (number > 0) {
    return number * -1;
  } else if (number <= 0) {
    return Math.abs(number);
  }
}
console.log(opposite(-12525220.3325));
