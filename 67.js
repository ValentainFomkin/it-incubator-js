/*Второй способ доступа к свойствам объекта — запись в квадратных скобках ( []). 
Если в имени свойства объекта, к которому вы пытаетесь получить доступ, есть пробел, 
вам нужно будет использовать обозначение в квадратных скобках.

Однако вы по-прежнему можете использовать скобки для свойств объекта без пробелов. 

Прочитайте значения свойств an entreeи the drinkиспользования testObjскобочной
 нотации и присвойте их соответственно entreeValueи drinkValue.*/

// Setup
const testObj = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water',
};

// Only change code below this line
const entreeValue = testObj['an entree']; // Change this line
const drinkValue = testObj['the drink']; // Change this line
