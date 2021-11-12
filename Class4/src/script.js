import Cleave from "cleave.js";
require('cleave.js/dist/addons/cleave-phone.be');

window.onload = function() {
    console.log("test");
    inputFormats();
}

function inputFormats(){

    var cleave = new Cleave ('.demoinput', {
        blocks:[2,2,2,3,2]
    });

    var name = new Cleave ('.name', {
        numeral: false,
        prefix: 'STUDENT-', 
        uppercase: true
    });

    var birthdate = new Cleave ('.birthdate', {
        date: true,
        delimiter: '-',
        datePattern: ['d','m','Y']
    });

    var rrn = new Cleave ('.rrn', {
        delimiters: ['.', '.','-', '.'],
        blocks:[2,2,2,3,2]
    });

    var age = new Cleave ('.age', {
        numeral: true,
        numeralPositiveOnly: true,
        numericOnly: true
    });

    var phone = new Cleave ('.phone', {
        phone: true,
        phoneRegionCode: 'BE',
        blocks:[2,3,2,2]
    });

    console.log("test1");
}