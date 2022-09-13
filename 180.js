/*Установите параметры по умолчанию для ваших функций
Чтобы помочь нам создавать более гибкие функции, ES6 вводит параметры по умолчанию для функций.

Проверьте этот код:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
Консоль отобразит строки Hello Johnи Hello Anonymous.

Параметр по умолчанию срабатывает, когда аргумент не указан (он не определен).
 Как вы можете видеть в приведенном выше примере, параметр nameполучит значение 
 по умолчанию, Anonymousесли вы не укажете значение для параметра. Вы можете добавить 
 значения по умолчанию для любого количества параметров.

Измените функцию increment, добавив параметры по умолчанию, чтобы она добавляла 1, numberесли valueне указано.*/

const increment = (number, value = 1) => number + value;
