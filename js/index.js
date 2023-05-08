let valOne = 2;

if(valOne >= 3){
    console.log("Thee Value is Greater or equal to 3!")
} else {
    console.log("The value is not greater than or equal to 3!")
}


let valTwo = 10;
if(valTwo % 2 === 0){
    console.log("This number is Even")
} else{
    console.log("This number is odd")
}

let str = "";
if(str === ""){
    console.log("The string is empty")
}else{
    console.log("The string is not empty")
}

let value = 10;
if(value > 5 && value < 15){
    console.log("The value falls between 5 & 15 ")
}else{
    console.log("The value does not falls between 5 &15 ")
}

let age = 31;
let user = "Brilu";

if(age > 18 || user === "Dave") {
    console.log("Welcome " + user + ", to the club!")
}

let number = 10;

for(let i = 0; i <= number; i++) {
    console.log(i);
}

let number1 = 10;

for(let i = 0; i >= 0; i--) {
    console.log(i);
}

let sum = 0;

for(let i = 1; i <= 10; i++){
    sum += i;
    
}

console.log(sum)

let nameArray = ["Mike","Luke" ,"Dylan" ,"Austin", "August", "Timmy"];
let isTimmy = false;

for(let i = 0; i < nameArray.length; i++){
    console.log(nameArray[i])
}

let numberArray = [435, 345, 678, 654, 345 ]

for(let i = 0; i < numberArray.length; i++){
    //total += numberArray[i];
    console.log(numberArray);
}

console.log("The total is: " + numberArray);



for(let i = 0; i < nameArray.length; i++){
    let user1 = nameArray[i];

    if(user === "Timmy"){
        console.log("Welcome " + user1 + " to the party!")
    }
}



