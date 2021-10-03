"use strict";

let dishes = [];
dishes.push({
    id: '1',
    name: 'Burger',
    price: '8'
},{
    id: '2',
    name: 'Chicken wings',
    price: '4'
},{
    id: '3',
    name: 'Kebab',
    price: '10'
});


const Order= {
    initfields(){
    const form = document.getElementById('form');
    form.addEventListener("submit",this.submitHandler);
    },
    
    submitHandler(e){
        e.preventDefault();
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.querySelector('input[name="option"]:checked').value;
       

        let dish = dishes.find(d => d.id == order);

        Order.displayOrder(name, email, dish);
    },

    displayOrder(name, email, dish){
    console.log(name, email, dish);
     let orderDisplay = document.getElementById("orderDisplay")
     orderDisplay.innerHTML = ` ${name} has ordered ${dish.name}. A confirmation of this order wil be sent to ${email}.` 
    }
}



Order.initfields();

