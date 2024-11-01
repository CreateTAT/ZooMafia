const bannerSlides = document.querySelectorAll('.banner-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Функция переключения слайдов
function changeSlide(n) {
  bannerSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + n + bannerSlides.length) % bannerSlides.length;
  bannerSlides[currentSlide].classList.add('active');
}

// События для кнопок "Предыдущий" и "Следующий"
prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

// Таймер для автоматической смены слайдов
setInterval(() => changeSlide(1), 10000);