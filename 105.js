/*Вычтите сумму
Выполните функцию, которая получает на вход число n такое, что n >= 10 и n < 10000, затем:
Суммировать все цифры числа n.
Вычтите сумму из n, и это будет ваше новое n.
Если новое n находится в списке ниже, верните соответствующий фрукт, иначе вернитесь к задаче 1.
Пример
n = 325
сумма = 3+2+5 = 10
n = 325-10 = 315 (нет в списке)
сумма = 3+1+5 = 9
n = 315-9 = 306 (нет в списке)
сумма = 3+0+6 = 9
n =306-9 = 297 (нет в списке)
...пока вы не найдете первое n в списке ниже.
*/
// const fruitArray = ["kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple", "cucumber", "pineapple", "cucumber",
// "orange",
// "grape",
// "orange",
// "grape",
// "apple",
// "grape",
// "cherry",
// "pear",
// "cherry",
// "pear",
// "kiwi",
// "banana",
// "kiwi",
// "apple",
// "melon",
// "banana",
// "melon",
// "pineapple",
// "melon",
// "pineapple",
// "cucumber",
// "orange",
// "apple",
// "orange",
// "grape",
// "orange",
// "grape",
// "cherry",
// "pear",
// "cherry",
// "pear",
// "apple",
// "pear",
// "kiwi",
// "banana",
// "kiwi",
// "banana",
// "melon",
// "pineapple",
// "melon",
// "apple",
// "cucumber",
// "pineapple",
// "cucumber",
// "orange",
// "cucumber",
// "orange",
// "grape",
// "cherry",
// "apple",
// "cherry",
// "pear",
// "cherry",
// "pear",
// "kiwi",
// "pear",
// "kiwi",
// "banana",
// "apple",
// "banana",
// "melon",
// "pineapple",
// "melon",
// "pineapple",
// "cucumber",
// "pineapple",
// "cucumber",
// "apple",
// "grape",
// "orange",
// "grape",
// "cherry",
// "grape",
// "cherry",
// "pear",
// "cherry",
// "apple",
// "kiwi",
// "banana",
// "kiwi",
// "banana",
// "melon",
// "banana",
// "melon",
// "pineapple",
// "apple",
// "pineapple"];

// function SubtractSum(n) {
//   for (let i = 0; i < 10000; i++) {
//     if (n >= 10 && n < 100) {
//       n = n - (n[0] + n[1]);
//       if (n === newObj[n - (n[0] + n[1])) {
//         return newObj[n];
//       } else {
//         n = n - (n[0] + n[1]);
//       }
//     } else if (n >= 100 && n < 1000) {
//       n = n - (n[0] + n[1] + n[2]);
//       if (n === newObj[n - (n[0] + n[1] + n[2])) {
//         return newObj[n];
//       } else {
//         n = n - (n[0] + n[1] + n[2]);
//       }
//     } else if (n >= 1000 && n < 10000) {
//       n = n - (n[0] + n[1] + n[2] + n[3]);
//       if (n === newObj[n[0] + n[1] + n[2] + n[3]]) {
//         return newObj[n];
//       } else {
//         n = n - (n[0] + n[1] + n[2] + n[3]);
//       }
//     }
//   }
// }

const fruits = [
  'kiwi',
  'pear',
  'kiwi',
  'banana',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'apple',
  'pineapple',
  'cucumber',
  'pineapple',
  'cucumber',
  'orange',
  'grape',
  'orange',
  'grape',
  'apple',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'kiwi',
  'banana',
  'kiwi',
  'apple',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'pineapple',
  'cucumber',
  'orange',
  'apple',
  'orange',
  'grape',
  'orange',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'apple',
  'pear',
  'kiwi',
  'banana',
  'kiwi',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'apple',
  'cucumber',
  'pineapple',
  'cucumber',
  'orange',
  'cucumber',
  'orange',
  'grape',
  'cherry',
  'apple',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'kiwi',
  'pear',
  'kiwi',
  'banana',
  'apple',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'pineapple',
  'cucumber',
  'pineapple',
  'cucumber',
  'apple',
  'grape',
  'orange',
  'grape',
  'cherry',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'apple',
  'kiwi',
  'banana',
  'kiwi',
  'banana',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'apple',
  'pineapple',
];
const SubtractSum = (x) => {
  const sum = `${x}`.split('').reduce((p, c) => +p + +c, 0);
  const y = x - sum;
  return y <= 99 ? fruits[y - 1] : SubtractSum(y);
};

//Testing out all possible combinations 10 -- 10000
for (let i = 10; i < 10000; i++) {
  console.log(i, SubtractSum(i)); //Prints "apple"
}
