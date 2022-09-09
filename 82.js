/* Напишите функцию persistence, которая принимает положительный параметр num
 и возвращает его мультипликативную стойкость, то есть количество раз, которое нужно перемножить цифры в num, пока не получится одна цифра.

39 --> 3 (потому что 3*9 = 27, 2*7 = 14, 1*4 = 4 и 4 имеет только одну цифру)
999 --> 4 (потому что 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12 и, наконец, 1*2 = 2)
4 --> 0 (потому что 4 уже является однозначным числом)*/

function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  var mult = 1;
  var splitStr = num.toString().split('');
  for (var i = 0; i < splitStr.length; i++) {
    mult *= parseFloat(splitStr[i]);
  }
  return 1 + persistence(parseFloat(mult));
}
console.log(persistence(55));
