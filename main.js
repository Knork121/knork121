let typed = new Typed(".multiple-text", {
  strings: ["Student", "Web Developer?", "Android Developer?", "nobody."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const header = document.querySelector(".header");

if (header) {
  header.addEventListener("scroll", () => {
    if (header.scrollY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-blur");
  } else {
    header.classList.remove("header-blur");
  }
});

// document.querySelectorAll("header .navbar a").forEach((el) =>
//   el.scrollIntoView({
//     block: "center",
//     behavior: "smooth",
//   })
// );

document.querySelectorAll("header .navbar a").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    const hash = el.getAttribute("href");
    const target = document.querySelector(hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
