export const initCursor = () => {
  const followCursor = document.querySelector("#blob");

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    followCursor.style.left = x - 50 + 'px';
    followCursor.style.top = y - 50 + 'px';
  });
}
