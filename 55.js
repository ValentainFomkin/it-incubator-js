/*Цепочка операторов If Else
if/elseоператоры могут быть объединены в цепочку для сложной логики. 
Напишите цепочку операторов if/ else if, чтобы выполнить следующие условия:

num < 5- вернуться Tiny
num < 10- вернуться Small
num < 15- вернуться Medium
num < 20- вернуться Large
num >= 20- вернутьсяHuge    */

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else if (num >= 20) {
    return 'Huge';
  }

  return 'Change Me';
  // Only change code above this line
}

testSize(7);
