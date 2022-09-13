/*Используйте рекурсию для создания диапазона чисел
Продолжая предыдущую задачу, мы предоставляем вам еще одну возможность создать рекурсивную функцию для решения проблемы.

Мы определили функцию с именем rangeOfNumbersс двумя параметрами. Функция должна возвращать массив целых чисел, 
который начинается с числа, представленного startNum параметром, и заканчивается числом, представленным endNum параметром.
 Начальное число всегда будет меньше или равно конечному числу. Ваша функция должна использовать рекурсию, вызывая саму себя,
  и не использовать циклы любого рода. Это также должно работать для случаев, когда оба startNumи endNum одинаковы.*/

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 5));