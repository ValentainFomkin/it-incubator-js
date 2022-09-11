/*В этом Ката вам предстоит найти коэффициенты квадратного уравнения от заданных двух корней (x1 и x2).

Уравнение будет иметь вид ax^2 + bx + c = 0

Возвращаемый тип - вектор (кортеж в Rust, массив в Ruby), содержащий коэффициенты уравнений в порядке (a, b, c).

Поскольку существует бесконечно много решений этой задачи, мы фиксируем a = 1.

Помните, что корни можно записать в виде (x-x1) * (x-x2) = 0.

Пример
квадратичный(1,2) = (1, -3, 2)
Это означает (x-1) * (x-2) = 0; при умножении получается x^2 - 3x + 2 = 0.

Пример 2
квадратичный(0,1) = (1, -1, 0)
Это означает (x-0) * (x-1) = 0; при умножении получается x^2 - x + 0 = 0

Примечания
Входными данными будут целые числа.
Когда x1 == x2, это означает, что корень имеет кратность два*/

function quadratic(x1, x2) {
  return [1, -(x2 + x1), x1 * x2];
}