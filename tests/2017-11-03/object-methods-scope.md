var name ="Vitalik Buterin";
var obj = {
   name: 'Satoshi Nakamoto',
   prop: {
      name: 'Adam Back',
      getFullname: function() {
         return this.name;
      }
   }
};

the above code has one variable and  object that has three keys 
which are name, prop, and getFullname which is a method.
the method has a return statement this.name
which will return "Adam back" because of this method 
the this keyword means refers to the nearest parent scope
in this case its the object(prop)


 