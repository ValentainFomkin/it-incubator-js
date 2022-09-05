/*Знакомство с операторами Else
Когда условие для ifоператора истинно, выполняется блок кода, следующий за ним. 
Что делать, если это условие ложно? Обычно ничего бы не случилось. С elseоператором может быть выполнен альтернативный блок кода.*/

//Объедините ifутверждения в одно if/elseутверждение.

function testElse(val) {
  let result = '';
  // Only change code below this line

  if (val > 5) {
    result = 'Bigger than 5';
  } else {
    result = '5 or Smaller';
  }

  // Only change code above this line
  return result;
}

testElse(4);
