const menuButton = document.querySelector(".menu-button");
const drawer = document.querySelector(".drawer");
const screenshotInputs = document.querySelectorAll(".project-preview input");

menuButton.addEventListener("click", () => {
  const isOpen = drawer.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

drawer.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    drawer.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

screenshotInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    const preview = input.closest(".project-preview");
    const image = preview.querySelector("img");

    if (!file) {
      return;
    }

    image.src = URL.createObjectURL(file);
    preview.classList.add("has-image");
  });
});
