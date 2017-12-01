// Create a function that will return true if the second argument (string)
// is in the first argument (string). Please create your own name
// for the function, do not use the example.

// someFunctionName('Perfect Practice Makes Perfect', 'Perfect') = True

// someFunctionName('We should have a growth Mindset', 'Fixed') = False
const checksAvailability = (str, str2) => {
  str.toLowerCase();
  str2.toLowerCase();
  return str.indexOf(str2) !== -1;
};
console.log(
  checksAvailability("the quick brown fox jumps over the dog", "lazy")
);
console.log(
  checksAvailability("the quick brown fox jumps over  the lazy dog", "lazy")
);
