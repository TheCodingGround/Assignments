class Person {

    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log('this.name',this.name);
    }

    walk(speed){
        console.log(this.name + ` is walking at ${speed} km/h`);
    }

    sayGender(){
        console.log(`${this.name} is a ${this.gender}`);

    }
}


class Lady extends Person {
    constructor(name){
        super(name)
        this.gender = 'Female';
    }
}

class Man extends Person {
    constructor(props){
        super(props)
        this.gender = 'Male';
    }
}


var theo = new Man('Theo')
theo.sayHello();
theo.sayGender();

var mary = new Lady('Mary')

mary.sayHello();
mary.walk(10);
mary.walk(15);
mary.sayGender();
