document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector("[data-sandwich]");
  const mainNav = document.querySelector("[data-main-nav]");
  const logo = document.querySelector("[data-header-logo]");
  const navItems = document.querySelectorAll(".main-nav__item");
  const WINDOW_WIDTH_THRESHOLD = 1023;

  const toggleMenu = () => {
    const isActive = burgerButton.classList.toggle("is-active");
    mainNav.classList.toggle("is-active", isActive);
    document.body.classList.toggle("scroll-lock", isActive);
    logo.classList.toggle("is-menu", isActive);
    if (isActive) {
      animateMenuItems();
    } else {
      resetMenuItems();
    }
  };

  const resetMenuItems = () => {
    navItems.forEach((item) => {
      item.style.transitionDelay = "";
      item.style.opacity = "";
      item.style.transform = "";
    });
  };

  const animateMenuItems = () => {
    resetMenuItems();
    let delay = 0;
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, delay);
      delay += 100;
    });
  };

  burgerButton.addEventListener("click", () => {
    if (window.innerWidth < WINDOW_WIDTH_THRESHOLD) {
      toggleMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (!mainNav.classList.contains("is-active")) {
      navItems.forEach((item) => {
        item.style.opacity = "1";
      });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      burgerButton.classList.contains("is-active")
    ) {
      toggleMenu();
    }
  });
});
