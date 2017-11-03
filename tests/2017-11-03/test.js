var name = "adam beck";
var obj = {
    name: 'Satoshi Nakamoto',
    prop: {
        name: 'Adam Back',
        getFullname: function() {
            return this.name;

        }

    }
};
console.log(obj.prop.getFullname());
var fullName = obj.prop.getFullname();
console.log(fullName);