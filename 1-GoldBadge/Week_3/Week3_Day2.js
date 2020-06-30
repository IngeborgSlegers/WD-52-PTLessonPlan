// WHITEBOARD ASSESSMENT
// Things students can be working on:
//    * Repls 2.1 and 3.1
//    * Portfolio
//    * Modules
//    * Week 4 Videos

// SWAPI LINK UPDATED => SWAPI.DEV instead of SWAPI.CO


// JAVASCRIPT WHITE BOARDING ASSESSMENT
 
 
// CHALLENGE 1:
// Write a function that accepts two names as parameters and then prints the full name to the console.
 
// Example: greeting('Robin', 'Holler')
 
 
 

// CHALLENGE 2:
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print 'Fizz'.
// For multiples of 5, instead of the number, print 'Buzz'.
// For multiples of 3 AND 5, instead of the number, print 'Fizz Buzz'.
 
 
 

// CHALLENGE 3:
// Write a function called isRightTriangle that accepts three parameters called: side, base, and hypotenuse.
// The function should return true if it forms a right triangle; it should return false if it doesn't.
// (HINT: pythagorean theorem: a**2 + b**2 = c**2).
 
// Example:
// isRightTriangle(3,4,5) == true
// isRightTriangle(5,6,7) == false
 
 

// CHALLENGE 4:
// Create an object literal called netflix.
// It will have three properties: id, name, and seasonInfo.
// Id will be an integer and name will be a string.
// SeasonInfo will be an object which will have a property called episodeInfo, which is an array of more objects.
// Those objects have an episode number property and an episodeName property.
 
// You are welcome to fabricate the data.
 

let weatherTemp = 90;

if (weatherTemp >= 90) {
  console.log('It\'s shorts season!');
}

if (weatherTemp >= 90) {
  console.log('It\'s shorts season!');
} else {
  console.log('Gotta wear those long pants');
}

//what do we have to do to see the 'Gotta wear those long pants' in the console?

//what about the cases in between??

if (weatherTemp >= 90) {
  console.log('It\'s shorts season!');
} else if (weatherTemp < 90 && weatherTemp >= 75) {
  console.log('I can wear shorts but maybe add a hoodie.');
} else if (weatherTemp < 75 && weatherTemp >= 65) {
  console.log('Now I definitely have to wear long pants.')
} else {
  
}