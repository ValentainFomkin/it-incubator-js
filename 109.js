/*Описание:
Удаляет восклицательный знак из конца строки. Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять это не нужно.

Примеры
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"*/

function remove(string) {
  let res = '';
  if (string[string.length - 1] === '!') {
    return (res += string.substring(0, string.length - 1));
  } else {
    return string;
  }
}
console.log(remove('!Hi'));
