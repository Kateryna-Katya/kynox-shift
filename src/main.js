/**
 * KYNOX SHIFT - Master Script 2026
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. ИНИЦИАЛИЗАЦИЯ ИКОНОК
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }

  // 2. МОБИЛЬНОЕ МЕНЮ
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');

  navToggle?.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
  });

  // Закрыть меню при клике на ссылку
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
      });
  });

  // 3. ЭФФЕКТ СКРОЛЛА ХЕДЕРА
  const header = document.querySelector('#header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.style.padding = '1rem 0';
          header.style.background = 'rgba(10, 10, 10, 0.95)';
      } else {
          header.style.padding = '1.5rem 0';
          header.style.background = 'rgba(10, 10, 10, 0.8)';
      }
  });

  // 4. ЛОГИКА КУКИ-ПОПАПА
  const cookiePopup = document.querySelector('#cookie-popup');
  const acceptBtn = document.querySelector('#cookie-accept');
  const declineBtn = document.querySelector('#cookie-decline');

  if (!localStorage.getItem('kynox_cookies')) {
      setTimeout(() => {
          cookiePopup?.classList.add('active');
      }, 2000);
  }

  acceptBtn?.addEventListener('click', () => {
      localStorage.setItem('kynox_cookies', 'accepted');
      cookiePopup.classList.remove('active');
  });

  declineBtn?.addEventListener('click', () => {
      localStorage.setItem('kynox_cookies', 'declined');
      cookiePopup.classList.remove('active');
  });

  // 5. AOS (Анимации при скролле)
  if (typeof AOS !== 'undefined') {
      AOS.init({
          duration: 800,
          once: true,
          offset: 100
      });
  }

  // 6. SWIPER (Слайдер блога)
  if (typeof Swiper !== 'undefined') {
      new Swiper('.blog-slider', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
          breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
      });
  }

  // 7. TYPEIT (Эффект терминала)
  if (typeof TypeIt !== 'undefined' && document.querySelector('#typeit-terminal')) {
      new TypeIt("#typeit-terminal", {
          speed: 50,
          startDelay: 900,
          waitUntilVisible: true,
          loop: true,
          cursorChar: "█",
      })
      .type('<span class="code-comment">// Протокол Kynox v2.4</span>')
      .break().type('> Соединение с ЕС... <span class="code-success">[OK]</span>')
      .break().type('> Модули ИИ активны.')
      .break().pause(1000).type('> Эффективность +45%')
      .go();
  }

  // 8. КОНТАКТНАЯ ФОРМА И КАПЧА
  const form = document.getElementById('kynox-form');
  if (form) {
      const captchaText = document.getElementById('captcha-question');
      const captchaInput = document.getElementById('captcha-answer');
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
      let correctAnswer = num1 + num2;
      if(captchaText) captchaText.innerText = `${num1} + ${num2}`;

      form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (parseInt(captchaInput.value) !== correctAnswer) {
              alert("Неверный расчет!");
              return;
          }

          const btn = form.querySelector('button');
          btn.innerText = "Отправка...";
          setTimeout(() => {
              form.reset();
              document.getElementById('form-success').classList.add('active');
              btn.innerHTML = 'Отправить заявку <i data-lucide="send"></i>';
              lucide.createIcons();
          }, 1500);
      });
  }

  // 9. THREE.JS HERO (Инициализация)
  if (typeof THREE !== 'undefined') {
      if (typeof initThreeJS === 'function') {
          initThreeJS();
      }
  }
});