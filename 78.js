/*Итерация с циклами while JavaScript
Вы можете запустить один и тот же код несколько раз, используя цикл.

Первый тип цикла, который мы изучим, называется whileциклом, 
потому что он выполняется, пока заданное условие истинно, 
и останавливается, когда это условие перестает быть истинным.

Добавьте числа от 5 до 0 (включительно) в порядке убывания, чтобы myArrayиспользовать whileцикл.*/

// Setup
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
// Only change code below this line
