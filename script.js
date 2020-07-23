const quoteElement = document.querySelector('.quote');

function updateQuote() {

fetch('https://api.kanye.rest')
.then((res) => {
    return res.json(); // возвращаем результат работы метода и идём в следующий then
  })
  .then((data) => {
      quoteElement.textContent = data.quote; // если мы попали в этот then, data — это объект
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });
}
document.querySelector('.header__btn').addEventListener('click', updateQuote);