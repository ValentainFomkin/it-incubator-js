/*Объедините два ifоператора в один оператор, который возвращает строку Outside, 
если valона не находится между 10и 20включительно. В противном случае вернуть строку Inside.*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return 'Outside';
  }

  // Only change code above this line
  return 'Inside';
}

testLogicalOr(15);
