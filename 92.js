/* Задание
Ваша задача - реализовать функцию, которая преобразует следующие потенциально опасные символы:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
 */

function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

console.log(htmlspecialchars('<h2>Hello World</h2>'));
