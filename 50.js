/*Сравнения с логическим оператором И
Иногда вам нужно будет протестировать более одной вещи за раз. Логический оператор and&& ( ) возвращает trueзначение тогда и только тогда, когда операнды слева и справа от него истинны.

Тот же эффект может быть достигнут путем вложения оператора if внутрь другого оператора if:*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return 'Yes';
  }

  // Only change code above this line
  return 'No';
}

testLogicalAnd(10);
