/* Удалить свойства из объекта JavaScript
Мы также можем удалить свойства из объектов следующим образом:*/

/* Удалить tailsсвойство из myDog. Вы можете использовать либо точку, либо квадратную нотацию.*/

// Setup
const myDog = {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
  bark: 'woof',
};
delete myDog['tails'];
// Only change code below this line
