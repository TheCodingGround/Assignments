function truthCheck(collection, pre) {
  for(var i = 0; i<collection.length;i++){
    if(!collection[i][pre]){
return false;
}
}
  // Is everyone being true?
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
