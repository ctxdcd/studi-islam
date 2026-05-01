const menuItems = document.querySelectorAll(".menu-item");

function setActiveItem(targetItem) {
  menuItems.forEach((item) => {
    const button = item.querySelector(".menu-link");
    const isActive = item === targetItem;

    item.classList.toggle("active", isActive);
    button.setAttribute("aria-expanded", String(isActive));
  });
}

menuItems.forEach((item) => {
  const button = item.querySelector(".menu-link");

  button.addEventListener("click", () => {
    const isAlreadyActive = item.classList.contains("active");

    if (isAlreadyActive) {
      item.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
    } else {
      setActiveItem(item);
    }
  });

  item.addEventListener("mouseenter", () => {
    setActiveItem(item);
  });

  item.addEventListener("focusin", () => {
    setActiveItem(item);
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideMenu = e.target.closest(".menu");

  if (!clickedInsideMenu) {
    menuItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".menu-link").setAttribute("aria-expanded", "false");
    });
  }
});