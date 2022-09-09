/* Вам будет дан массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.

Массив может содержать числа или строки. X может быть любым из них.

Верните true, если массив содержит значение, false - если нет.*/

function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}
console.log(check(['t', 'e', 's', 't'], 'e'));