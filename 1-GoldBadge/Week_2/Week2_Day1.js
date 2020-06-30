// FIZZBUZZ FOR LOOP

// Create a for loop that counts from 0 to 100

// Within the for loop write a conditional that checks each number and: 
// Prints out "Fizz" if the number is divisible by 3
// Prints out "Buzz" if the number is divisible by 5
// Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
// Prints out the number if it is not divisible by 3 or 5

// OPTIONAL: Wrap this all in a function and invoke it

// Convert the conditional to a ternary
// Convert the conditional to a switch



for (let i = 0; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log('FizzBuzz');
  }
  else if (i % 3 == 0) {
    console.log('Fizz');
  }
  else if (i % 5 == 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
}


// PIES CHALLENGE
// For Bronze, iterate over a pies array and write a conditional statement that checks if the pie includes a fruit name. Using string interpolation print a sentence that includes the name of the pie.
// For Silver, use a different loop and conditional to accomplish the same behaviour.
// For Gold, push all of the pies into a new array and have the new fruitPies array print once. 
// For Platinum, create an array of fruits. Use this array of fruit to compare against the pies array and push the pies that contain any of those fruits in the fruitPies array.

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'sugar', 'lemon meringue', 'chicken pot', 'shepherd']

let fruitPies = [];

for (pie of pies) {
  if (pie.includes('apple') || pie.includes('blueberry') || pie.includes('cherry') || pie.includes('peach') || pie.includes('lemon')) {
    console.log(`${pie} is a type of fruit pie!`);
    // fruitPies.push(pie);
  } else {
    console.log(`${pie} is a not a type of fruit pie.`)
  }
};

console.log(fruitPies);



let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];
let fruits = ['apple', 'blueberry', 'cherry', 'peach', 'lemon', 'lime'];
let fruitPies = [];

for (let i = 0; i < pies.length; i++) {
  // console.log(pies[i]);
  // console.log(fruits[i]);
  for (let j = 0; j < fruits.length; j++) {
    // console.log('pies[i]', pies[i]);
    // console.log('fruits[j]', fruits[j]);
    if (pies[i].includes(fruits[j])) {
      fruitPies.push(pies[i]);
    } else {
      console.log(`${pies[i]} is a not fruit pie`);
    };
  };
};

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime']
let fruits = ['apple', 'blueberry', 'cherry', 'peach', 'lemon', 'lime'];
let fruitPies = [];


for (let i = 0; i < pies.length; i++) {
  // console.log(pies[i]);
  // console.log(fruits[i]);
  for (fruit of fruits) {
    // console.log('pies[i]', pies[i]);
    // console.log('fruits[j]', fruits[j]);
    if (pies[i].includes(fruit)) {
      fruitPies.push(pies[i]);
    } 
  };
};

console.log(fruitPies);



// Create a variable that contains a string where the casing (lowercase or uppercase) of the letters in the string is random. For Bronze, write a program that prints out the string entirely lowercased. For Silver, write a program that checks the casing of the first letter, converts all of the letters in the string to match the casing of the first letter, and prints the new string. For Gold, write a program that inverts the casing of the letter and prints the inverted string. Use a different loop for each stage.

let greeting = 'HApPy bIRthDaY';
let correctCase = '';

for (letter in greeting) {
  console.log(letter);
  if (greeting[letter] === greeting[letter].toUpperCase()) {
    correctCase += greeting[letter].toLowerCase();
  } else {
    correctCase += greeting[letter];
  }
}

console.log(correctCase);

let greeting = 'hApPy bIRthDaY';
let correctCase = '';

for (let i = 0; i < greeting.length; i++) {
  if (greeting[0] === greeting[0].toUpperCase()) {
    correctCase += greeting[i].toUpperCase();
  } else if (greeting[0] === greeting[0].toLowerCase()) {
    correctCase += greeting[i].toLowerCase();
  }
}
console.log(correctCase);

let greeting = 'hApPy bIRthDaY';
let inverted = '';

for (letter of greeting) {
  // console.log(letter)
  if (letter === letter.toUpperCase()) {
    inverted += letter.toLowerCase();
  } else if (letter === letter.toLowerCase()) {
    inverted += letter.toUpperCase();
  };
};
console.log(inverted);



// TO DO
// Assign REPL

