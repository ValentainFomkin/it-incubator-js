/*Логический порядок в операторах If Else
Порядок важен в if, else ifзаявлениях.

Функция выполняется сверху вниз, поэтому вам нужно быть осторожным с тем, какой оператор идет первым.*/

//Измените порядок логики в функции, чтобы она возвращала правильные операторы во всех случаях.

function orderMyLogic(val) {
  if (val < 5) {
    return 'Less than 5';
  } else if (val < 10) {
    return 'Less than 10';
  } else {
    return 'Greater than or equal to 10';
  }
}

orderMyLogic(7);
