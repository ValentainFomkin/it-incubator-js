/* Глобальная и локальная область видимости в функциях
Можно иметь как локальные , так и глобальные переменные с одинаковыми именами. При этом локальная переменная имеет приоритет над глобальной.*/
// Setup
const outerWear = 'T-Shirt';

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();
