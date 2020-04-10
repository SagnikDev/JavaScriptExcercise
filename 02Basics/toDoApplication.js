let myToDos =[]

myToDos.push('Buy Bread')
myToDos.push('Curry the Egg')
myToDos.push('Go to gym')

myToDos.forEach(function(name,index){
    console.log(`Your task no. ${index+1} is --${name}`);
    
 })

 for ( let index=myToDos.length-1; index >= 0; index--){
     console.log(`Your task no. ${index+1} is --${myToDos[index]}`);
     
 }