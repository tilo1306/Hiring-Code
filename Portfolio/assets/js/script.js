const click = document.getElementById("arrow");

click.addEventListener("click", () => {
  const arrow = document.getElementById("animation");
  const description = document.getElementById("about");
  description.classList.toggle("hidden");
  arrow.classList.toggle("rotate");
});
