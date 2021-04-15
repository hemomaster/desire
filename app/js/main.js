document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.querySelector(".side-menu");

  // добавить/удалить класс активности "active" у элемента ".side-menu"
  const toggleSideMenu = () => {
    sideMenu.classList.toggle("active");
    if (sideMenu.classList.contains("active")) disableScroll();
    else enableScroll();
  };

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
});
