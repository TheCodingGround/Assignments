var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
obj.method(fn,1);//the length will be 2
obj.method(fn,1,3,3,3);//the length will be 5 
obj.method(fn,1,33,3,);//the length will be 4