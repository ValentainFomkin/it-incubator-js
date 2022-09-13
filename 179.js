/*Напишите стрелочные функции с параметрами
Как и в случае с обычной функцией, вы можете передавать аргументы в функцию со стрелкой.

const doubler = (item) => item * 2;
doubler(4);
doubler(4)вернет значение 8.

Если стрелочная функция имеет один параметр, круглые скобки, заключающие этот параметр, могут быть опущены.

const doubler = item => item * 2;
В стрелочную функцию можно передать более одного аргумента.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2)вернет значение 8.

Перепишите myConcatфункцию, которая добавляет содержимое arr2к arr1, чтобы она использовала синтаксис стрелочной функции.*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));