let numOne = 22;
let numTwo = 7;

// result=numOne/numTwo
// console.log(result.toFixed(2));

// let res=result.toFixed(2)

// console.log(Math.floor(res));
// console.log(Math.ceil(res));

// console.log(Math.random()*100);

//Random number between upper and lower
let upper = 25;
let lower = 20;

let myRandom = Math.random() * (upper - lower + 1);
myRandom = Math.floor(myRandom) + lower;
console.log(myRandom);
