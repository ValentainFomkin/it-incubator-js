/*Локальный охват и функции
Переменные, объявленные внутри функции, а также параметры функции имеют локальную область видимости. 
Это означает, что они видны только внутри этой функции. */
function myLocalScope() {
  // Only change code below this line
  let myVar = 'ddd';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
