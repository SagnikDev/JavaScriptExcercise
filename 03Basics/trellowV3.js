let myTodos={
    day:'Monday',
    meeting:0,
    meetDone:0,
    addMeeting: function(number){
        console.log(`${number} Meetings Added!`);
        this.meeting=this.meeting+number        
    },
    meetingsDone: function(number){
        console.log(`${number} meetings have completed!`);
        this.meetDone=this.meetDone+number
    },
    resetDay: function(){
        console.log('Meetings reset!');
        this.meeting=0
        this.meetDone=0
    },
    getSummaryOfDay: function(){
        console.log(`You have ${this.meeting-this.meetDone} meetings left`);
        
    }

}

myTodos.addMeeting(5)
myTodos.meetingsDone(4)
myTodos.resetDay()
myTodos.addMeeting(2)
myTodos.getSummaryOfDay()
