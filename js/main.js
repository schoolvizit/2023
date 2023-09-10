// бургер

const burger = document.querySelector('.burger'),
  buttonClose = document.querySelector('.burger span'),
  menu = document.querySelector('.header__menu'),
  links = document.querySelectorAll('.header__link'),

  // блок перекрывающий контент body
  overlay = document.querySelector('.burger__overlay');

burger.addEventListener('click', () => {
  buttonClose.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('lock');
});

overlay.addEventListener('click', () => {
  buttonClose.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('lock');
});

links.forEach(function (item) {
  item.addEventListener('click', () => {
    buttonClose.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  });
});


// select

document.querySelectorAll('.select__dropdown').forEach(function (dropDownWrapper) {

  const selectBtn = dropDownWrapper.querySelector('.select__btn'),
    selectList = dropDownWrapper.querySelector('.select__list'),
    selectListItem = selectList.querySelectorAll('.select__list-item'),
    selectPriceOne = document.querySelector('.price-one'),
    selectPriceTwo = document.querySelector('.price-two');

  //  Клик по кнопке. Открыть/Закрыть select
  selectBtn.addEventListener('click', () => {
    selectList.classList.toggle('select__list--visible');
    selectBtn.classList.toggle('active');

  });

  //  Выбор элемента списка. Заполнить выбранное значение. Закрыть select
  selectListItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      selectBtn.innerText = this.innerText;
      selectBtn.focus();
      selectPriceOne.innerText = this.dataset.value;
      selectPriceTwo.innerText = (+selectPriceOne.innerText + 10);
      selectBtn.classList.remove('active');
      selectList.classList.remove('select__list--visible');
    })
  })

  //  Клик снаружи селекта. Закрыть select
  document.addEventListener('click', (e) => {
    if (e.target !== selectBtn) {
      selectBtn.classList.remove('active');
      selectList.classList.remove('select__list--visible');
    }
  })

  //  Нажатие на Tab или Escape. Закрыть select
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      selectBtn.classList.remove('active');
      selectList.classList.remove('select__list--visible');
    }
  })
});


// scroll
document.addEventListener('DOMContentLoaded', () => {
  const toTop = document.querySelector('.to-top');
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= 900) {
      toTop.classList.add('to-top--active');
    } else {
      toTop.classList.remove('to-top--active');
    }
  });
});


// active class of menu items onscroll

// window.addEventListener('scroll', () => {
//   let scrollDistance = window.scrollY;
//   if (window.innerWidth > 768) {
//     document.querySelectorAll('.journal').forEach((el, i) => {
//       if (el.offsetTop - document.querySelector('.header__menu').clientHeight <= scrollDistance) {
//         document.querySelectorAll('.header__menu a').forEach((el) => {
//           if (el.classList.contains('active')) {
//             el.classList.remove('active');
//           }
//         });

//         document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active');
//       }
//     });
//   }
// });

// галлерея

document.querySelector('.btn-journal').addEventListener('click', () => {
  fsLightboxInstances['video-journal'].open(0);
});

document.querySelector('.btn-trumo').addEventListener('click', () => {
  fsLightboxInstances['video-trumo'].open(0);
});

document.querySelector('.btn-papka').addEventListener('click', () => {
  fsLightboxInstances['video-papka'].open(0);
});

// Плавный скролл

let anchors = document.querySelectorAll('header a[href*="#"]');

for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}