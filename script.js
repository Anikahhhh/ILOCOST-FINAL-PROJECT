// Get the DOM elements and initialize the game
const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainChances = document.querySelector(".chances");

// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);
let chance = 5;

// Listen for click event on the check button
checkButton.addEventListener("click", () => {
  // Decrement the chance variable on every click
  chance--;
  // Get the value from input field
  let inputValue = input.value;
  console.log(inputValue);
  // Check if the input value is equal to the random number
  if (inputValue == randomNum) {
    // Update guessed number, disable input, check button text and color.
    guess.textContent = "Congratulations you won a 15% discount" ;
    checkButton.disabled = true;
    checkButton.textContent = "Try Again";
    guess.style.color = "#ec8f38fb";
    // Check if input value is > random number and within 1-9 range.
  } else if (inputValue > randomNum && inputValue < 10) {
    // Update the guessed text and remaining chances
    guess.textContent = "Your guess is high";
    remainChances.textContent = chance;
    guess.style.color = "#333";
    // Check if input value is < random number and within 1-10 range.
  } else if (inputValue < randomNum && inputValue > 0) {
    // Update the guessed text and remaining chances
    guess.textContent = "Your guess is low";
    remainChances.textContent = chance;
    guess.style.color = "#333";
    // If the input value is not within the range of 1 to 10
  } else {
    // Update the guessed number text, color and remaining chances
    guess.textContent = "Your number is invalid";
    remainChances.textContent = chance;
    guess.style.color = "#DE0611";
  }
  // Check if the chances are zero
  if (chance == 0) {
    // Update check button, disable input, and clear input value.
    // Update guessed number text and color to indicate user loss.
    checkButton.textContent = "Try Again";
    input.disabled = true;
    inputValue = "";
    guess.textContent = "You lost the game";
    guess.style.color = "#DE0611";
  }
  if (chance < 0) {
    window.location.reload();
  }
});