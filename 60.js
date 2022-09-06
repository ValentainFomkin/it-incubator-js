/* Если в операторе switch оператор break пропущен, то следующие операторы case
 выполняются до тех пор, пока не будет встречен break. Если у вас есть несколько входов
  с одинаковым выходом, вы можете представить их в операторе switch следующим образом:*/
function sequentialSizes(val) {
  let answer = '';
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer += 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer += 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer += 'High';
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);
