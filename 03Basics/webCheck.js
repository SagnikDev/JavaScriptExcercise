email='SAGNIKDEVELOPER@GMAIL.COM'
password='Joy4$@gn!k'

// console.log(password.length);
// console.log(email.toLowerCase())
// console.log(password.trim());



let userChecker=function(id){
    id=id.toLowerCase()
    if(id.includes('@gmail.com') && id.length>10){
        return true
    } 
    else{
        return false
    }
}

console.log(userChecker(email));

let passwordChecker = function(psd){
    if((psd.includes('4')) || (psd.length>6)){
        return true
    }
    else{
        return false
    }
}
console.log(passwordChecker(password));
