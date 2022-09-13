/*Генерация случайных целых чисел с помощью JavaScript
Замечательно, что мы можем генерировать случайные десятичные числа, но еще полезнее использовать его для генерации случайных целых чисел.

Используйте Math.random()для генерации случайного десятичного числа.
Умножьте это случайное десятичное число на 20.
Используйте другую функцию, Math.floor()чтобы округлить число до ближайшего целого числа.
Помните, что Math.random()никогда не может быть полностью возвращено a 1и, поскольку мы 
округляем в меньшую сторону, на самом деле невозможно получить 20. Этот метод даст нам целое число между 0и 19.

Собрав все вместе, вот как выглядит наш код:

Math.floor(Math.random() * 20);
Мы вызываем Math.random(), умножаем результат на 20, затем передаем значение Math.floor()функции
 для округления значения до ближайшего целого числа.

Используйте этот метод, чтобы генерировать и возвращать случайное целое число между 0и 9.*/

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
