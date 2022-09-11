/*Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.*/
function removeExclamationMarks(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '!') {
      return (s = s.split('!').join(''));
    }
  }
}
console.log(removeExclamationMarks('Hello World!'));

// const test1 = (str) => {
//   str = str.replace(' big', '');
//   console.log(str); // only first 'big' removed
// };

// const test2 = (str) => {
//   str = str.split(' big').join('');
//   console.log(str); // all 'big'
// };

// let str = 'My big string lol, big big';

// test1(str);
// test2(str);

// // or:
// let arr = str.split(' ');
// // you can use splice now
// console.log(arr);
