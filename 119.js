/*Создайте функцию, которая проверяет, делится ли число n на два числа x И y. Все входные данные - строго положительные числа*/
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
console.log(isDivisible(3, 3, 4));
