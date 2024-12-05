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

//скролл по якорю
document.addEventListener('DOMContentLoaded', function() {
  const filterLinks = document.querySelectorAll('aside ul a'); 

  filterLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetSection = this.href; 
          const targetElement = document.getElementById(targetSection);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
              console.warn(`Section with ID "${targetSection}" not found on this page.`);
          }
      });
  });
});


//скролл со страницы на страницу
document.addEventListener('DOMContentLoaded', function() {
  const subcategoryLinks = document.querySelectorAll('aside ul.subcategories a');

  subcategoryLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const href = this.href;
          const targetSection = href.substring(href.indexOf('#') + 1); 
          if(window.location.href.includes(href.substring(0, href.indexOf('#')))) {
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error(`Section with ID "${targetSection}" not found.`);
            }
          } else {
            window.location.href = href;
          }

      });
  });
});