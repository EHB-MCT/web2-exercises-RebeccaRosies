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
},{
    id: '4',
    name: 'Fries',
    price: '5'
},{
    id: '5',
    name: 'Milkshake',
    price: '8'
});

const Order= {
    initfields(){
    //submitbutton
    const form = document.getElementById('form');
    form.addEventListener("submit",this.submitHandler);
    //PriceCalculatorbutton
    const priceButton = document.getElementById('priceButton');
    priceButton.addEventListener("click",this.priceCalculator);
    },
    
    submitHandler(e){
        e.preventDefault();
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.querySelectorAll('input[name="option"]:checked'); //returns a Nodelist
        console.log(order);

        let optionsArray = Array.prototype.slice.call(order);     //turns Nodelist into an Array
        console.log(optionsArray);
        let optionsValues = [];
        optionsArray.forEach((o)=>optionsValues.push(o.value)); // pushes the values of the checked options into an array
        console.log(optionsValues);
       
        let ordered = dishes.filter(dish => ( 
            optionsValues.includes(dish.id))).map(dish => dish.name)
        console.log(ordered);
        
        Order.displayOrder(name, email, ordered);
    },

    displayOrder(name, email, dish){
    console.log(name, email, dish);
     let orderDisplay = document.getElementById("orderDisplay")
     orderDisplay.innerHTML = ` ${name} has ordered: `
     dish.forEach(d =>orderDisplay.insertAdjacentHTML("beforeend",`<br> ${d}`) )
     orderDisplay.insertAdjacentHTML("afterend", `A confirmation of this order wil be sent to ${email}.`)
    },

    priceCalculator(e){
        let order = document.querySelectorAll('input[name="option"]:checked'); //returns a Nodelist
        let optionsArray = Array.prototype.slice.call(order);     //turns Nodelist into an Array
        let optionsValues = [];
        optionsArray.forEach((o)=>optionsValues.push(o.value)); // pushes the values of the checked options into an array

        let orderedPrices = dishes.filter(dish => ( 
            optionsValues.includes(dish.id))).map(dish => dish.price)
        console.log(orderedPrices);                                     // these numbers are strings (will be put next to each other ipv counted)
        
        let numberPrices = [];
        orderedPrices.forEach(p => numberPrices.push(parseInt(p,10))); // converts the string into integer so they can be counted
        console.log(numberPrices);
        
        let total = 0;
        for(let price of numberPrices){                             //adds up the prices of the separate options
            total += price;
        }
        console.log(total);
        Order.displayPrice(total);
    },

    displayPrice(total){
        let priceDisplay = document.getElementById('priceDisplay');
        priceDisplay.innerHTML = `${total}.`
    }
}

Order.initfields();

