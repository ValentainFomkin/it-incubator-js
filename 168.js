/*Генерировать случайные целые числа в диапазоне
Вот формула, которую мы будем использовать. Найдите минутку, чтобы прочитать его и попытаться понять, что делает этот код:

Math.floor(Math.random() * (max - min + 1)) + min

Создайте вызываемую функцию randomRange, которая принимает диапазон myMinи myMaxвозвращает 
случайное целое число, большее или равное myMin, и меньшее или равное myMax, включительно.*/

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(90, 100));
