
1.  What is the output of the following code and explain your answer in detail:var name = '"Vitalik Buterin';
var obj = {
   name: 'Satoshi Nakamoto',
   prop: {
      name: 'Adam Back',
      getFullname: function() {
         return this.name;
      }
   }
};

2. Write a *duplify* function on the String object. The function takes a number that specifies how many times the string has to be duplicated and returns the string repeated the number of times specified.