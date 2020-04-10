let x=function() {
    console.log('Hello World');
    
}

x()

let sayHello = function(name){
    console.log(`Hello ${name} hope you doing good.`);    
}

sayHello("Sagnik")

let fullName=function(firstName,lastName){
    console.log('Welcome on here:');
    console.log(`Hello ${firstName} ${lastName} welcome to here.`);
}

fullName('Sagnik','Roy')

let adder=function(num1,num2){
    console.log(`The addition of two numbers is ${num1+num2}`);
    return num1+num2
}

let result=adder(2,2)

console.log(result);

fullName=function(firstName='Joy',lastName){
    console.log('Welcome on here:');
    console.log(`Hello ${firstName} ${lastName} welcome to here.`);
}

fullName()


