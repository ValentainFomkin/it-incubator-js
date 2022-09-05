/*Знакомство с операторами Else If
Если у вас есть несколько условий, которые необходимо решить, вы можете связать ifоператоры вместе с else ifоператорами.*/

//Преобразуйте логику, чтобы использовать else ifоператоры.

function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }
}

testElseIf(7);
