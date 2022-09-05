/*Сравнение с оператором больше или равно
Оператор больше или равно ( >=) сравнивает значения двух чисел. Если число слева больше или равно числу справа, возвращается true. В противном случае возвращается false.

Как и оператор равенства, оператор больше или равно будет преобразовывать типы данных при сравнении.*/

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return '20 or Over';
  }

  if (val >= 10) {
    // Change this line
    return '10 or Over';
  }

  return 'Less than 10';
}

testGreaterOrEqual(10);
