document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.querySelector(".side-menu");

  // добавить/удалить класс активности "active" у элемента ".side-menu"
  const toggleSideMenu = () => {
    sideMenu.classList.toggle("active");
    if (sideMenu.classList.contains("active")) disableScroll();
    else enableScroll();
  };

  // слайдер первого экрана home page
  const heroSlider = new Swiper(".hero__container", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",

    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".hero__pagination",
      clickable: true,
    },
  });

  // слайдер contact page
  const carouselSlider = new Swiper(".contact__carousel-container", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
      el: ".contact__carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 7,
        slidesPerGroup: 4,
      },
    },
  });

  // слайдер первого экрана home page
  const postSlider = new Swiper(".swiper-container.post-carousel__container", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",

    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Переключаем элемент ".side-menu" если была нажат
  // пункт меню ".nav__list-link",
  // кнопка закрытия ".side-menu__close",
  // или оверлей
  sideMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.closest(".nav__list-link") ||
      target.closest(".side-menu__close") ||
      (target === sideMenu && !target.closest(".side-menu__body"))
    )
      toggleSideMenu();
  });

  document.querySelector(".header__btn").addEventListener("click", () => {
    toggleSideMenu();
  });

  // Нажатой кнопке прописуем класс активности .active
  const initTabs = (selParentTabs, selTabs, classActive) => {
    const parentTabs = document.querySelector(selParentTabs);
    const tabs = parentTabs.querySelectorAll(selTabs);

    parentTabs.addEventListener("click", (e) => {
      tabs.forEach((tab) => tab.classList.remove(classActive));
      e.target.classList.add(classActive);
    });
  };

  // подключаю mixitup
  // определяем селектор категории по умолчанию
  const masonry = document.querySelector(".masonry");
  if (masonry) {
    const tabs = document.querySelectorAll(".gallery__tab");
    const activTab = [...tabs].find((tab) => tab.classList.contains("active"));
    const dataFilter = activTab ? activTab.dataset.filter : ".category-a";

    const mixer = mixitup(masonry, {
      load: {
        filter: dataFilter,
      },
    });

    initTabs(".gallery__tabs", ".gallery__tab", "active");
  }
  //
});
