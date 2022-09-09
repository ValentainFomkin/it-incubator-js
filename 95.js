/*Это ката заключается в умножении заданного числа на восемь, если это четное число, и на девять в противном случае.*/

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(8));
