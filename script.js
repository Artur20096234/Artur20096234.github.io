let score = 0; // Начальный счёт

// Получаем ссылку на кнопку и счёт
const button = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");

// Функция, которая срабатывает при клике на кнопку
button.addEventListener("click", function() {
  score++; // Увеличиваем счёт
  scoreDisplay.textContent = score; // Обновляем счёт на странице
});
