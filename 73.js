/* Проверка объектов на свойства
Иногда полезно проверить, существует ли свойство данного объекта или нет.
 Мы можем использовать .hasOwnProperty(propname)метод объектов, чтобы определить,
  имеет ли этот объект заданное имя свойства. .hasOwnProperty()возвращает trueили falseесли свойство найдено или нет.

	Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный функции ( obj), определенное свойство ( checkProp).
	 Если свойство найдено, верните значение этого свойства. Если нет, верните "Not Found".*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return 'Not Found';
  }

  // Only change code above this line
}
