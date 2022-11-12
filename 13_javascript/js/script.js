// burger

const burgerBtn = document.querySelector('.burger-line');
const burgerClose = document.querySelector('.burger-line__close');
const burgerNav = document.querySelector('.nav');

burgerBtn.addEventListener('click', () =>{burgerNav.classList.toggle('burger-active');
});
burgerClose.addEventListener('click', () =>{burgerNav.classList.toggle('burger-active');
});

// search-click

const searchBtn = document.querySelector('.search-click');
const searchClose = document.querySelector('.search-close__click');
const headerSearch = document.querySelector('.header-search');

searchBtn.addEventListener('click', () => {headerSearch.classList.toggle('header-search__active');
});
searchClose.addEventListener('click', () => {headerSearch.classList.toggle('header-search__active');
});

// swiper
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    // how-we-work__tabs
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.step-item__btn').forEach(function (e) {
        e.addEventListener('click', function(e) {
          const tab = e.currentTarget.dataset.path;
          document.querySelectorAll('.how-we-work__description-block').forEach(function (e) {
            e.classList.remove('how-we-work__description-block--active')
            document.querySelector(`[data-target='${tab}']`).classList.add('how-we-work__description-block--active');
          });
        });

        e.addEventListener('click', function (e) {
          const tabDefault = e.currentTarget.dataset.default;
          document.querySelectorAll('.step-item__btn').forEach(function (e) {
            e.classList.remove('step-item__btn--active')
            document.querySelector(`[data-path='${tabDefault}']`).classList.add('step-item__btn--active');
          });
        });

      });
    })

    // asked-questions__accordion
    $('.asked-questions__list-accordion').accordion({
      heightStyle: "content",
      collapsible: true,
      icons: false,
      active: false,}
    );
