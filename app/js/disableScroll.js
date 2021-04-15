// можно использовать только если на body
// нет сторонних стилей css

// Отключение прокрутки
// с сохранением положения окна устройства на странице
window.disableScroll = function () {
  const body = document.body;
  const widthScrollBar = window.innerWidth - body.offsetWidth;

  body.dataset.scrollY = window.scrollY;
  body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    padding-right: ${widthScrollBar}px;
  `;
};
// Включение прокрутки
window.enableScroll = function () {
  const body = document.body;
  const scrollY = Number(body.dataset.scrollY);

  body.removeAttribute("data-scroll-y");
  body.style.cssText = "";
  window.scroll({ top: scrollY });
};
