var num = 1;

while(num<=10){
    console.log(num);
    num = num+1;
}
console.log("while loop completed");


console.log("<==============odd numbers between 1 to 20======>");
var num2 = 1;
while(num2<=20){
    console.log(num2);
    num2 = num2 + 2;
}


console.log("<============for loop===============>");
for(var num3=1;num3<=10;num3++){
    console.log(num3);
}


console.log("<==================for each loop==========>")
var arr1 = [1,5,7,45,65,78,34];
for(var value of arr1){
    console.log(value);
}