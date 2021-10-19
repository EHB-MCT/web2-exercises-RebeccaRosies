import Cleave from "cleave.js";

var cleave = new Cleave ('.demoinput', {
    blocks:[2,2,2,3,2]
});

var age = new Cleave ("#age", {
    numeral: true,
    numeralPositiveOnly: true
});

var age = new Cleave ("#phone", {
    phone: true,
    phoneRegionCode: 'BE'
});