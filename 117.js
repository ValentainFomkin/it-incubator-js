/*Напишите функцию для разбиения строки и преобразования ее в массив слов.

Примеры (вход ==> выход):
"Робин Сингх" ==> ["Робин", "Сингх"].

"Я люблю массивы, они мои любимые" ==> ["я", "люблю", "массивы", "они", "являются", "мои", "любимые"].*/

function stringToArray(string) {
  return string.split(' ');
}
console.log(stringToArray('I love arrays they are my favorite'));
