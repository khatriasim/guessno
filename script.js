let container = document.querySelector(".container")
let button = document.createElement("button")
button.textContent = "Guess"
button.className = "btn"
container.appendChild(button)

let guess = Math.floor(Math.random() * 10 + 1)
console.log(guess)

button.addEventListener("click", ()=>{
    let inputvalue = document.getElementById("inputbar").value
    let reply = document.querySelector(".reply")

    if (!inputvalue) {
        reply.textContent = "please enter any no btn 1 - 10"
    }
    else if (inputvalue == guess){
        reply.textContent = "you guessed it right"
    } else if (inputvalue > guess){
        reply.textContent = "you guessed abit higher"
    } else if (inputvalue < guess){
        reply.textContent = "you guessed abit lower"
    }

})
