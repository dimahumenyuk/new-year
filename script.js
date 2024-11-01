// Отримуємо всі елементи з атрибутом data-timer
let timers = document.querySelectorAll('[data-timer]');

timers.forEach(function(timer) {
  // Встановлюємо дату та час, коли таймер повинен зупинитися
  let countDownDate = new Date(timer.getAttribute('data-end')).getTime();

  // Функція для оновлення таймера
  function updateTimer() {
    // Отримуємо поточний час
    let now = new Date().getTime();
    
    // Знаходимо різницю між зараз і часом зупинки
    let distance = countDownDate - now;
    
    // Розраховуємо час для днів, годин, хвилин та секунд
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Виводимо результат в елемент з id="demo"
    timer.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // Якщо таймер досягнув кінця, виводимо текст
    if (distance < 0) {
      timer.innerHTML = "EXPIRED";
    } else {
      // Якщо таймер ще не досяг кінця, оновлюємо його
      requestAnimationFrame(updateTimer);
    }
  }

  // Запускаємо таймер
  requestAnimationFrame(updateTimer);
});
