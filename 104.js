/*Нам нужен массив, но не просто старый массив, а массив с содержимым!

Напишите функцию, которая создает массив с числами от 0 до N-1.

Например, следующий код приведет к созданию массива, содержащего числа от 0 до 4:

arr(5) // => [0,1,2,3,4].
Примечание: Параметр является необязательным. Поэтому вы должны задать ему значение по умолчанию.*/

const arr = (N) => {
  let res = [];
  for (let i = 0; i < N; i++) {
    res.push(i);
  }
  return res;
};
console.log(arr(4));
