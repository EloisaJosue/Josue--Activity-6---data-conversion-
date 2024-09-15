//Convert a String to a Number//

//Create a variable named price and assign it the string value "200".
let price = "200";

priceInt = parseInt(price);
priceNumber = Number(price);
pricePlus = +price;

console.log(priceNumber); //200
console.log(pricePlus); //200
console.log(typeof price); //string

//Convert a Number to a String//

//Create a variable named distance and assign it the number value 150.
let distance = 150;

distanceString = distance.toString();
distanceStringNum = String(distance);

console.log(distance); //150
console.log(distanceStringNum); //150
console.log(typeof distance); //number



//Convert a String to a Decimal Number//

//Create a variable named weight and assign it the string value "72.5".
let weight = "72.5";
weight = parseFloat(weight);

console.log(weight); //72.5
console.log(typeof weight); //number
