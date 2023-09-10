$(document).ready(function () {
    $('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      prevArrow: '<button class="btn slick-btn slick-prev"><img src="img/left.svg" alt="arrow"></button>',
      nextArrow: '<button class="btn slick-btn slick-next"><img src="img/right.svg" alt="arrow"></button>',
    });
  });
 

window.onload = function () {
  let body = document.querySelector("body");
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav");

  burger.addEventListener("click", function () {
    body.classList.toggle("hidden")
    burger.classList.toggle("active")
    nav.classList.toggle("open")
  })

  const buttonUp = {
    el: document.querySelector('.arrow-btn-up'),
    show() {
      this.el.classList.add('btn-visible');
    },
    hide() {
      this.el.classList.remove('btn-visible');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 300 ? this.show() : this.hide();
      });
      document.querySelector('.arrow-btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  buttonUp.addEventListener();
}

AOS.init();