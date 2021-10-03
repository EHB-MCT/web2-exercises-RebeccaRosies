"use strict";


const Order= {
    initfields(){
    const form = document.getElementById('form');
    form.addEventListener("submit",this.submitHandler);
    },
    
    submitHandler(e){
        e.preventDefault();
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.getElementById('orderInput').value;
        Order.displayOrder(name, email, order);
    },

    displayOrder(name, email, order){
    console.log(name, email, order);
     let orderDisplay = document.getElementById("orderDisplay")
     orderDisplay.innerHTML = ` ${name} has ordered ${order}. A confirmation of this order wil be sent to ${email}.` 
    }
}
Order.initfields();

//we were thaught not to use var in dev I and II so i already used let and const from the beginning 

/* // with an arrow function (and all in one)

const Order= {
    initfields(){
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.getElementById('orderInput').value;
        console.log(name, email, order);
        let orderDisplay = document.getElementById("orderDisplay")
        orderDisplay.innerHTML = ` ${name} has ordered ${order}. A confirmation of this order wil be sent to ${email}.` 
        });
    }
}
Order.initfields(); */

