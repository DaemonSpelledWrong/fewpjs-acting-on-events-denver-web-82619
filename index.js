let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");

  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
};

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");

  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 5}px`;
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});