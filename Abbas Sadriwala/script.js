// DOM Elements
const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");
const successMessage = document.querySelector(".success-message");
const resetButton = document.querySelector(".reset-btn button");

// Loop through each boxes element
boxes.forEach((box) => {
  // When a draggable element dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // Prevent default behaviour
    box.classList.add("hovered");
  });

  // When a draggable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  // When a draggable element is dropped on a box element
  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered");
    showSuccessMessage();
  });
});

// Show success message
function showSuccessMessage() {
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
}

// Reset containers
function resetContainers() {
  boxes[0].appendChild(image);
  successMessage.style.display = "none";
}