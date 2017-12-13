function sym(args) {
  args =Array.from(arguments);
function remDupli (elem1,elem2){
      var arr =[];
    elem1.forEach(function(cha){
    if(elem2.indexOf(cha)===-1 && arr.indexOf(cha)===-1){
      arr.push(cha);
      }
    });
     elem2.forEach(function(ca){
    if(elem1.indexOf(ca) ===-1 && arr.indexOf(ca)===-1){
      arr.push(ca);
    }
     });
      return arr;
    } 
    return args.reduce(function(a,b){return remDupli(a,b);},[]);
  }
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
