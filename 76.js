/* Доступ к вложенным массивам
Как мы видели в предыдущих примерах, объекты могут содержать как вложенные объекты, так и вложенные массивы. Подобно доступу к вложенным объектам, нотация скобок массива может быть связана для доступа к вложенным массивам.

Используя нотацию с точкой и квадратными скобками, установите переменную secondTreeна второй элемент в treesсписке от myPlantsобъекта.*/

const myPlants = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'dandelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);
