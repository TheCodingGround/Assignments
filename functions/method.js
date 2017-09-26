var user = {
    name: "Cindy",
    surname: "Mahlangu",
    logHello: function(timeOfDayGreeting){
        console.log(`${timeOfDayGreeting} ${this.name} ${this.surname}`);
    }
};

user.logHello("Good morning");