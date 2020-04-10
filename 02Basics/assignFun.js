let getMyGrades= function(currentMarks,totalMarks){
    let myPercentage=100*(currentMarks/totalMarks)

    let myGrade=calculateGrade(myPercentage)
    console.log(`My Grade is ${myGrade}`)

}

let calculateGrade=function(myPercentage){
    let myGrade
    if (myPercentage >= 90) {
        myGrade='A'
    }else if (myPercentage>=80) {
        myGrade='B'
    }else if (myPercentage>=70) {
        myGrade='C'
    }else if (myPercentage>=60) {
        myGrade='D'
    }else{
        myGrade='F'
    }

    return myGrade
}
getMyGrades(55,100)