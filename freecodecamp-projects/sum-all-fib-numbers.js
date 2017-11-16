  
function sumFibs(num) {
var prev =0;
var curr =1;
var results =0;
  while(curr <=num){
if(curr % 2 !== 0){
  results += curr;
}
    curr += prev;
prev = curr - prev;
  }
  return results
   ;
}

sumFibs(100000000000000);
