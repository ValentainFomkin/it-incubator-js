/* Задание
Ваша задача - реализовать функцию, которая преобразует следующие потенциально опасные символы:
< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
 */

function htmlspecialchars(formData) {
  let result = '';
  for (let i = 0; i < formData.length; i++) {
    if (formData[i] == '<') {
      formData[i].replace('<', '&lt;');
      return (result += formData);
    }
  }
  return formData
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

console.log(htmlspecialchars('<h2>Hello World</h2>'));
