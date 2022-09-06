/* Использование объектов для поиска
Объекты можно рассматривать как хранилище ключей/значений, например словарь.
 Если у вас есть табличные данные, вы можете использовать объект для поиска значений, 
 а не switchоператор или if/elseцепочку. Это наиболее полезно, когда вы знаете, 
 что ваши входные данные ограничены определенным диапазоном.

 Преобразуйте оператор switch в объект с именем lookup. 
 Используйте его, чтобы найти valи присвоить связанную строку resultпеременной.*/

// Setup
function phoneticLookup(val) {
  let result = '';

  // Only change code below this line
  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup('charlie');
