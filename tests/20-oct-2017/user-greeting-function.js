function person(name, otherName) {
    this.name = name;
    this.otherName = otherName;
}
person.prototype.greet = function() {
    return "Hi " + this.otherName + ", my name is " + this.name;
}
var greets = new person("johannes", "mokgokong");
var person1 = new person("person1", "person2");
var person3 = new person("person3", "persone3");
console.log(greets.greet());
console.log(person1.greet());
console.log(person3.greet());