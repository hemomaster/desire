document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.querySelector(".side-menu");

  // добавить/удалить класс активности "active" у элемента ".side-menu"
  const toggleSideMenu = () => sideMenu.classList.toggle("active");

  sideMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (
      (target === sideMenu && !target.closest(".side-menu__body")) ||
      target.closest(".side-menu__close")
    )
      toggleSideMenu();
  });

  document.querySelector(".header__btn").addEventListener("click", () => {
    toggleSideMenu();
  });
});
