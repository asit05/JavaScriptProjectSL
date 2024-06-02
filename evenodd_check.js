var num = -7;

if(typeof num !== 'number'){
    console.log("Not a number");
}else if(num%2===0 || num===0){
    console.log(num+" is an even number");
}
else{
    console.log(num+" is odd number");
}