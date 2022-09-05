/*Добавьте оператор меньше или равно к указанным строкам, чтобы операторы return имели смысл.*/

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return 'Smaller Than or Equal to 12';
  }

  if (val <= 24) {
    // Change this line
    return 'Smaller Than or Equal to 24';
  }

  return 'More Than 24';
}

testLessOrEqual(10);
