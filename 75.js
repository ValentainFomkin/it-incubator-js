/*Доступ к вложенным объектам
Доступ к подсвойствам объектов можно получить, соединив вместе точки или квадратные скобки.

Обратитесь к объекту myStorage и присвойте содержимое свойства перчаточного ящика переменной gloveBoxContents. 
По возможности используйте точечную нотацию для всех свойств, в противном случае используйте скобочную нотацию.
*/

const myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};

const gloveBoxContents = myStorage.car.inside['glove box'];
