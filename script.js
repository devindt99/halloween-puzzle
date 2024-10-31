// script.js

// Function to randomize the initial rotation of each piece
function initializePuzzle() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach(piece => {
      const randomRotation = Math.floor(Math.random() * 4) * 90; // 0, 90, 180, or 270 degrees
      piece.rotation = randomRotation; // Store the initial rotation in a JavaScript property
      piece.style.transform = `rotate(${piece.rotation}deg)`;
      
      // Add click event listener for each piece to handle rotation
      piece.addEventListener("click", () => {
        piece.rotation = (piece.rotation + 90) % 360; // Increment rotation by 90 degrees
        piece.style.transform = `rotate(${piece.rotation}deg)`; // Apply the new rotation
        checkPuzzle(); // Check if puzzle is solved
      });
    });
  }
  
  // Function to check if all pieces are correctly aligned
  function checkPuzzle() {
    const pieces = document.querySelectorAll(".piece");
    const allCorrect = Array.from(pieces).every(piece => piece.rotation % 360 === 0);
    
    if (allCorrect) {
      showJumpScare();
    }
  }
  
  // Function to show the jump scare
  function showJumpScare() {
    const jumpscare = document.getElementById("jumpscare");
    jumpscare.classList.remove("hidden");
  
    // Play the sound
    const scareSound = document.getElementById("scareSound");
    scareSound.play();
  
    // Hide jump scare after a short delay
    setTimeout(() => {
      jumpscare.classList.add("hidden");
    }, 3000);
  }
  
  // Initialize the puzzle on page load
  window.onload = initializePuzzle;
  