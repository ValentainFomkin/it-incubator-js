/*Вам дан объект-литерал, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный номер id в качестве ключа и несколько других свойств. Не все альбомы содержат полную информацию.

Вы начинаете с функции updateRecords, которая принимает объектный литерал records, содержащий коллекцию музыкальных альбомов, идентификатор, свойство (например, artist или tracks) и значение. Завершите функцию, используя приведенные ниже правила для изменения объекта, переданного в функцию.

Ваша функция всегда должна возвращать весь объект коллекции записей.
Если prop не является tracks и value не является пустой строкой, обновите или установите prop этого альбома в value.
Если prop - tracks, но у альбома нет свойства tracks, создайте пустой массив и добавьте в него значение.
Если prop - tracks и value не является пустой строкой, добавьте значение в конец существующего массива tracks альбома.
Если value - пустая строка, удалите данное свойство prop из альбома.
Примечание: Для тестов используется копия объекта recordCollection.
*/
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (
    prop === 'tracks' &&
    records[id].hasOwnProperty('tracks') === false
  ) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
  } else if (value === '') {
    delete records[id][prop];
  }
  return records;
}

console.log(
  updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love')
);
