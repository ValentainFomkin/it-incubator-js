/* Создайте функцию, которая выдает персональное приветствие. Эта функция принимает два параметра: имя и владелец.

Для возврата нужного сообщения используйте условия:*/

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
console.log(greet('Greg', 'Daniel'));
