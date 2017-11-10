function bragFirst(){
  return {
      brag: "Ska ba forgiva!"
  };
}

function bragAgain(){
  return
  {
      brag: "Ska ba forgiva!"
  };
}
console.log(bragAgain());
//console.log(bragFirst());
// the first function is the window/global functions and because of that i believe that when we call 
// that function it will refer to window/global and  print out the object"brag:ska ba forgiva!".now because the second object is not bound to any object 

// when it is called like this bragAgain(); it will refer to the global and then return undefined.

// thats is because of how its called.