document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.querySelector(".side-menu");

  // добавить/удалить класс активности "active" у элемента ".side-menu"
  const toggleSideMenu = () => {
    sideMenu.classList.toggle("active");
    if (sideMenu.classList.contains("active")) disableScroll();
    else enableScroll();
  };

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
  const tabs = document.querySelectorAll(".gallery__tab");
  const activTab = [...tabs].find((tab) => tab.classList.contains("active"));
  const dataFilter = activTab ? activTab.dataset.filter : ".category-a";

  const mixer = mixitup(".masonry", {
    load: {
      filter: dataFilter,
    },
  });

  initTabs(".gallery__tabs", ".gallery__tab", "active");

  //
});
