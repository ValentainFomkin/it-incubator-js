/* Ваша задача - создать функцию, которая выполняет четыре основные математические операции.

Функция должна принимать три аргумента - операция(строка/знак), значение1(число), значение2(число).
Функция должна возвращать результат в виде числа после применения выбранной операции.

Примеры(Оператор, значение1, значение2) --> вывод
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7*/

function basicOp(operation, value1, value2) {
  let plus = value1 + value2;
  let minus = value1 - value2;
  let multiple = value1 * value2;
  let divide = value1 / value2;
  if (operation === '+') {
    return plus;
  } else if (operation === '-') {
    return minus;
  } else if (operation === '*') {
    return multiple;
  } else if (operation === '/') {
    return divide;
  }
}
console.log(basicOp('-', 15, 18));
