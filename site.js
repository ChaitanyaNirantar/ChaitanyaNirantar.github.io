(function () {
  var nav = document.getElementById("nav");
  var menu = document.querySelector(".menu");
  var links = document.getElementById("navlinks");
  if (!nav || !menu || !links) return;

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  menu.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", open ? "true" : "false");
    menu.textContent = open ? "Close" : "Menu";
  });

  links.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      links.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "Menu";
    }
  });
})();
