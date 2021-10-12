let randomNumber;
function generateNumber(){
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
}

function initfields(){
    let messages = document.getElementById("messages");
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let inputNumber = document.getElementById("inputNumber").value;
        console.log(inputNumber);
    
        compareNumbers(inputNumber).then(
            result => {messages.innerHTML = result}, 
            error =>{messages.innerHTML = error}
        );
    });
}

function compareNumbers(inputNumber){
    // stel dat dit een heel complexe berekening is moeten we wachten op resultaat 
    return new Promise((resolve, reject) => {                  
        if(inputNumber>randomNumber){
            reject("The mystery number is lower. Guess again")
        }else if (inputNumber==randomNumber) {
            resolve("You have guessed the mystery number!")
        }else if (inputNumber<randomNumber) {
            reject("The mystery number is higher. Guess again!")
        } else {
           reject("That is not a valid number (Error)")
        }
    });
}



window.onload = function (){
    generateNumber();
    initfields();
}