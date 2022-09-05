/* Понимание неопределенного значения, возвращаемого функцией
Функция может включать returnоператор, но это не обязательно. 
В случае, если у функции нет returnинструкции, при ее вызове функция 
обрабатывает внутренний код, но возвращаемое значение равно undefined.*/
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
