/* Задание:
Напишите функцию, которая будет принимать два параметра: переменную и тип и проверять,
 совпадает ли тип переменной с типом. Возвращать true, если типы совпадают, или false, если нет.

Примеры:
42, "число" --> true
"42", "число" --> false*/

function typeValidation(variable, type) {
  return typeof variable === type ? true : false;
}
console.log(typeValidation(42, 'number'));
