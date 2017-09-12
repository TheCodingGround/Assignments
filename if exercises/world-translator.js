//NOTE: I set it to variables here instead of magic strings, to prevent typing mistakes etc.
const zulCode = "zul";
const afrCode = "afr";

//if version
function helloWorld(languageCode) {
    if (languageCode == zulCode) {
        return "Sawubona, Mhlaba";
    }
    else if (languageCode == afrCode) {
        return "Hello Wereld";
    } else {
        return "Hello, World";
    }
}

//switch version
function helloWorld(languageCode){
    //https://www.w3schools.com/js/js_switch.asp
    switch (languageCode){
        case zulCode:{
            return "Sawubona, Mhlaba";
        }
        case afrCode:{
            return "Hello Wereld";
        }
        case "de":{
            return "Hallo, Welt";
        }
        default: {
            return "Hello, World";
        }
    }
}

function logHelloWorld(languageCode){
    var greeting = helloWorld(languageCode);
    console.log(greeting);
}

logHelloWorld("en");
logHelloWorld("afr");
logHelloWorld("zul");
logHelloWorld();