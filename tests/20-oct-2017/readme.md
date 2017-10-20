Katas

1. Find the last element of a list.

Example:

last( [1,2,3,4] ) // => 4

last( "xyz" ) // => z

last( 1,2,3,4 ) // => 4

2. Correct this code, so that the greet function returns the expected value.

function Person(name){ this.name = name; }

Person.prototype.greet = function(otherName){ return "Hi " + otherName + ", my name is " + name; }

3. Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false. The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true

numbers(1, "a", 3); // false

numbers(1, 3, NaN); // true

4. Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function. The solution should implement the most optimal algorithm possible.

solution(1, 2, 3) // returns false

solution(1, 2, 3, 2) // returns true

solution('1', '2', '3', '2') // returns true

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Comments

Please do this on your own, and try not to get help from anyone else, so treat this as a test, not to get marked on, but to check your understanding. We will then go through it when we get there.

If you get stuck with one of the assignments and cannot continue with it, commit the code as it is and continue on to the next assignment. When we get there, we can then go through it with you.
