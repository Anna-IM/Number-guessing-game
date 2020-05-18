let number_tries = 3;
let result = Math.floor(Math.random() * 10);


function myFunction() {
    console.log(number_tries);
    // console.log(result);
    let guess = document.getElementById("text");
    // console.log(guess.value);
    let answer = document.getElementById("answer");

    // check the number
    if (guess.value > 10 || guess.value < 0){
        answer.innerHTML = "Please enter a number between 1 and 10";
        // location.reload();
    // number of tries
    } else if (number_tries == 0){
        answer.innerHTML = "You're out of tries " + number_tries;
        //reload the page
        setTimeout(function () { 
        location.reload();
        }, 3000);

    } else if (guess.value != result){
        console.log("try again " + number_tries);
        answer.innerHTML = "Try again ";
    } else if(guess.value == result){
        console.log("you won");    
        answer.innerHTML = "You won!";
        setTimeout(function () { 
        location.reload();
        }, 3000);
    }
    number_tries--;
};