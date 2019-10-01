export function addButtonHoverClass() {
  var touchsupport =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  if (!touchsupport) {
    var buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className += " button_button-hover";
    }
  }
}
