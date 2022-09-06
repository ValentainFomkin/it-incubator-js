/*Вам предстоит написать функцию подсчета карточек. Она будет получать параметр card, который может быть числом или строкой, и увеличивать или уменьшать глобальную переменную count в соответствии со значением карты (см. таблицу). Затем функция возвращает строку с текущим значением счета и строку Bet, если счет положительный, или Hold, если счет нулевой или отрицательный. Текущий счет и решение игрока (Bet или Hold) должны быть разделены одним пробелом.

Пример вывода: -3 Hold или 5 Bet

Подсказка
НЕ сбрасывайте счет на 0, если значение равно 7, 8 или 9.
НЕ возвращайте массив.
НЕ включайте в вывод кавычки (одинарные или двойные).*/

let count = '';

function cc(card) {
  // Only change code below this line

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0) {
    return count + ' Bet';
  } else if (count <= 0) {
    return count + ' Hold';
  }
  return 'Change Me';
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
