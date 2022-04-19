const toggleableElement = document.getElementById("toggle-element");
const toggleButton = document.getElementById("toggle-btn");
let toggle = true;

toggleButton.addEventListener("click", () => {
    toggle = !toggle;
    toggleableElement.style.display = toggle ? "none" : "flex";

});

