/*Выполните функцию, которая принимает два целых числа (a, b, где a < b) и 
возвращает массив всех целых чисел между входными параметрами, включая их.*/

function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(between(1, 4));
