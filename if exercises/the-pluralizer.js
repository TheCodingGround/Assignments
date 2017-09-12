//NOTE: Sheep and Geese are not collective nouns as the assignment says, they are just plurals that are exceptions to the rule.

//I made this global because normally we would store it in a file or database
var supportedPlural = [
    { noun: "goose", plural: "geese" },
    { noun: "sheep", plural: "sheep" },
    { noun: "mouse", plural: "mice" },
    { noun: "tooth", plural: "teeth" }
];

function getPluralOf(noun){
    var exception = supportedPlural.find(n => n.noun == noun);
    return exception != null ? exception.plural : noun + "s";
}

function pluralize(noun, number) {
    if (number == 1) {
        return `${number} ${noun}`;
    }
    else if (number > 1) {
        var plural = getPluralOf(noun);
        return `${number} ${plural}`;
    } else {
        throw new Error(`${number} is not supported.`);
    }
}

function logPluralizeOf(noun, number){
    var result = pluralize(noun, number);
    console.log(result);
}

logPluralizeOf("dog", 1);
logPluralizeOf("dog", 2);
logPluralizeOf("goose", 2);
logPluralizeOf("goose", 1);
logPluralizeOf("tooth", 1);
logPluralizeOf("tooth", 4);