/*В checkSignфункции используйте несколько условных операторов — в соответствии с
 рекомендуемым форматом, используемым в findGreaterOrEqual— чтобы проверить,
  является ли число положительным, отрицательным или нулем. Функция должна вернуть positive, negativeили zero.*/

function checkSign(num) {
  return num > 0 ? 'positive' : num === 0 ? 'zero' : 'negative';
}

checkSign(10);
