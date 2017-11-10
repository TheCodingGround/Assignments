function spinalCase(str) {
 var firstReplacer = /([a-z])([A-Z])/g;
  var secondReplacer = / /g;
  return str.replace(firstReplacer,'$1 $2').replace(secondReplacer,"-").replace(/_/g,"-").toLowerCase();
}

spinalCase('thisIsSpinalTap');
