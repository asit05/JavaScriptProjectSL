//functions definition
var add = (num1,num2) =>num1+num2;

console.log(add(5,6));

var welcome = () =>"welcome to js";

console.log(welcome());

var square = (num) => num*num;
console.log(square(3)); 

var greetings = (name) => "hello "+name;
console.log(greetings("Asit")); 





var primeNumberCheck = (num) => {
var isprime = true;

if (typeof num !== 'number') {
    console.log("It is not a number");
}
else if (num === 1) {
    console.log("Number is not prime or composite");
}
else if (num > 1) {
    for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isprime = false;
            break;
        }
    }
    if (isprime) {
        console.log("Number is prime");
    } else {
        console.log("Number is not prime");
    }
} else {
    console.log("Number is negative number")
}
}

console.log(primeNumberCheck(7));