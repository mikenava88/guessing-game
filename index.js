const gameresult = document.querySelector(".gameresult")
const gameinput = document.querySelector(".gameinput")
const submitbutton = document.querySelector(".submitbutton")
let answer = 25;
let counter = Math.floor(Math.random() * 101)
const hint = document.querySelector(".hint")
const reset = document.querySelector(".reset")
submitbutton.addEventListener('click', function () {
    counter--
    if (counter === 0) {
        document.body.style.backgroundColor = "red";
        return gameresult.innerText = "You're out of tries";
    }
    if (gameinput.value > answer) {
        return hint.innerText = "hint: Too High";
    } else if (gameinput.value < answer) {
        return hint.innerText = "hint: Too Low";

    }


    console.log(gameinput.value);
    if (answer == gameinput.value) {
        document.body.style.backgroundColor = "green";
        return gameresult.innerText = "Correct";
    } 
})
reset.addEventListener('click', function () {

 counter = 5
 document.body.style.backgroundColor = "white";
 answer = Math.floor(Math.random() * 101)
 return gameresult.innerText = "You have restarted";
        
})


Math.floor(Math.random() * 101);