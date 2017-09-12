//There are multiple ways to do this using if statements (other ways are not shown here) and I've given 2 examples. 
//You can also use a switch statement, which will then be similar to the first example. 
//With the first one, the order is extremely important because it assumes because it wasn't higher than, 
//it will continue checking until it finds it and then exit immediately, where the second example checks for a range
//Option 2 has more code

function assignGrade1(score){
    //anything greater than 79, including bonus points that are greater than 100. In a real life scenario,
    //we would need to ask the customer what to do in this scenario.
    if (score > 79) {
        return "A";
    }
    else if (score > 69){
        return "B";
    }
    else if (score > 59){
        return "C";
    }
    else if (score > 49){
        return "D";
    }
    else if (score > 39){
        return "E";
    }
    if (score >= 0){
        return "F";
    }
    else{
        throw new Error("Unsupported score value");
    }
}

function assignGrade(score){
    //anything greater than 79, including bonus points that are greater than 100. In a real life scenario,
    //we would need to ask the customer what to do in this scenario.
    if (score >= 0 && score < 40){
        return "F";
    }
    else if (score >= 40 && score <= 49){
        return "E";
    }
    else if (score >= 50 && score <= 59){
        return "D";
    }
    else if (score >= 60 && score <= 69){
        return "C";
    }
    else if (score >= 70 && score <= 79){
        return "B";
    }
    if (score >= 80) {
        return "A";
    }
    else{
        throw new Error("Unsupported score value");
    }
}

function logGradeFor(score){
    var grade = assignGrade(score);
    console.log(`Grade for ${score} is ${grade}`);
}

//Test for F
logGradeFor(0);
logGradeFor(10);
logGradeFor(31);
logGradeFor(39);

//Test for E
logGradeFor(40);
logGradeFor(45);
logGradeFor(49);

//Test for D
logGradeFor(50);
logGradeFor(54);
logGradeFor(59);

//Test for C
logGradeFor(60);
logGradeFor(65);
logGradeFor(69);

//Test for B
logGradeFor(70);
logGradeFor(75);
logGradeFor(79);

//Test for A
logGradeFor(80);
logGradeFor(89);
logGradeFor(90);
logGradeFor(99);
logGradeFor(100);

//Test for unsupported
logGradeFor();
logGradeFor(null);
logGradeFor("a");