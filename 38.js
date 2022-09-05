/* Стоять в очереди
В информатике очередь — это абстрактная структура данных , в которой элементы хранятся в порядке. Новые элементы могут быть добавлены в конец очереди, а старые элементы удалены из начала очереди.

Напишите функцию, nextInLineкоторая принимает массив ( arr) и число ( item) в качестве аргументов.

Добавьте число в конец массива, затем удалите первый элемент массива.

Затем nextInLineфункция должна вернуть элемент, который был удален.*/
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift(item);
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine([5, 6, 7, 8, 9], 1));
console.log('After: ' + JSON.stringify(testArr));
