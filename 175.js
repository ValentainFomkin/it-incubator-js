function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
/*Исправьте код так, чтобы iобъявленная в ifоператоре переменная была отдельной от iобъявленной в первой строке функции. 
Убедитесь, что varключевое слово нигде в вашем коде не используется.

Это упражнение предназначено для того, чтобы проиллюстрировать разницу между тем, как ключевые слова varи letназначают
 область действия объявленной переменной. При программировании функции, подобной той, что используется в этом упражнении, 
 асто лучше использовать разные имена переменных, чтобы избежать путаницы.*/