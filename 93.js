/* Я новичок в кодировании и сейчас я хочу получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.

P.S. Каждый массив включает только целые числа. Выходные данные - это тоже числа.*/

function arrayPlusArray(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] + arr2[i];
  }
  return result;
}
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
