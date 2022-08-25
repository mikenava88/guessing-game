const hint = document.querySelector(".hint")
const reset = document.querySelector(".reset")
const gameresult = document.querySelector(".gameresult")
const gameinput = document.querySelector(".gameinput")
const submitbutton = document.querySelector(".submitbutton")
let tally = document.querySelector(".tally")
let answer = Math.floor(Math.random() * 101);
let counter = 6




submitbutton.addEventListener('click', function () {
    counter--
    tallyCounter(counter);
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

function tallyCounter(counter) {
    if (counter) {
        return tally.innerText = "number of tries:" + counter
    }
}

reset.addEventListener('click', function () {
    tally.innerText = "number of tries:" + 5
    counter = 5
    document.body.style.backgroundColor = "white";
    answer = Math.floor(Math.random() * 101)
    return gameresult.innerText = "You have restarted";

})


