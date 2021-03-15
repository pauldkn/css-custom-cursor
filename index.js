const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".link");

const moveCursor = (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
};

window.addEventListener("mousemove", _.throttle(moveCursor, 25));

links.forEach((link, i) => {
  //   setInterval(() => {
  //     link.classList.add("reveal");
  //   }, (i + 1) * 500);
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("grow");
    link.classList.add("is-hovered");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    link.classList.remove("is-hovered");
  });
});
