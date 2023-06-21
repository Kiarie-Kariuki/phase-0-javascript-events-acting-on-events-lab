// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  // Add your event listener for the key 'ArrowRight' to make Dodger go right

  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var currentPosition = parseInt(dodger.style.left);
    var newPosition = currentPosition + 1;
  
    dodger.style.left = newPosition + 'px';
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  })
  