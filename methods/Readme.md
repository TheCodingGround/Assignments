# Examples of javascript methods, for a description see: https://www.w3schools.com/js/js_object_methods.asp

## Description

JavaScript *methods* are the *actions* that can be performed on *objects*.
A JavaScript *method* is a *property* containing a *function* definition.

var user = {
    name: "Theo",
    surname: "Bohnen",
    toString: function(){
        return name + " " + surname;
    }
};