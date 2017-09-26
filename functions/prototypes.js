var user = {
    name: "Cindy",
    surname: "Mahlangu"
};

user.logHello("Good morning");

var user2 = {
    name: "Mary",
    surname: "Mafa"
};

Object.prototype.logHelloProto = function(){
    console.log(`${this.name} ${this.surname} from Prototype`);
}

user.logHelloProto();
user2.logHelloProto();

String.prototype.log = function(prependValue = ""){
    console.log(prependValue + this.toLowerCase());
};

"This should be logged".log("Hello");

user.name.log();