let numberTries = 3;
const result = Math.floor(Math.random() * 10);
const guess = document.querySelector("#text");
const answer = document.querySelector("#answer");

const guessNumber = () => {
  // check the number
  if (guess.value > 10 || guess.value < 0) {
    answer.innerText = "Please enter a number between 1 and 10";
    // number of tries
  } else if (numberTries == 0) {
    answer.innerText = "You're out of tries " + numberTries;
    //reload the page
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (guess.value != result) {
    console.log("try again " + numberTries);
    answer.innerText = "Try again ";
  } else if (guess.value == result) {
    console.log("you won");
    answer.innerText = "You won!";
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  numberTries--;
};
