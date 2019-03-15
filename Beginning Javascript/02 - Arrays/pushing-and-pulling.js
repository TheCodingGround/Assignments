var names = [];

names.push("position 0");
names.push("position 1");
names.push("position 2");
names.push("position 3");
names.push("position 4");

console.log('slice won\'t change array but return a new one based on starting index and length', names.slice(2, 4))

console.log('names before splice', names);

//will remove the item in the array at position 0, and only remove 2 items
names.splice(0, 2)

console.log('names after splice', names);