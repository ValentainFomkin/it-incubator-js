/*Составьте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

Если в имени ровно 4 буквы, вы можете быть уверены, что это ваш друг! В противном случае вы можете быть уверены, что это не он...

Например: Вход = ["Ryan", "Kieran", "Jason", "Yous"], Выход = ["Ryan", "Yous"].

Примечание: сохраните исходный порядок имен в выходных данных.*/

function friend(friends) {
  let res = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      res.push(friends[i]);
    }
  }
  return res;
}
console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous', 'lolo']));

// ЛИБО через filter

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous', 'lolo']));
