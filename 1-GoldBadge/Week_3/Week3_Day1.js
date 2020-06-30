// WHITEBOARDING PRACTICE CHALLENGES

// COUNTING SUM CHALLENGE

// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers. 

//Results for testing
countingSum(1, 100) // = 5050
countingSum(35, 77) // = 2408
countingSum(234, 567) // = 133767


// Solution
function countingSum(start, stop) {
  let sum = 0;
  for (let i = start; i <= stop; i++) {
    sum = sum + i;
  }
  console.log(sum);
}


function countingSum(start, stop) {
  let sum = start;
  for (let i = start; i <= stop; i++){
    console.log('i', i);
    console.log('sum', sum);
    sum = sum + 1;
    console.log('sum in for loop', sum)
  };
  console.log('total sum', sum);
};

countingSum(1, 100) // = 5050
countingSum(35, 77) // = 2408
countingSum(234, 567) // = 133767


// PET OBJECT
// Create a pets object
// The object should contain the following properties:
/*
Animal - string
Name - string
Gender - string
Age - integer
Likes - array
*/

let myPet = {
  animal: 'dog',
  name: 'Georgie',
  gender: "female",
  age: 4,
  likes: ["Anything food related", "Hide bones", "Speak loudly"]
}

let pet = {
  animal: "dog",
  name: "Finn",
  gender: "male",
  age: 2,
  likes: ["Chew toys", "Destroying things", "Being rude"],
}




// Area of a Trapezoid
// Write a function that accepts the parameters b1, b2, h 
// You function should console.log the area of a Trapezoid
// 1/2(b1 + b2)h


function trapezoid(b1, b2, h){
  console.log((b1 +b2)/2*h)
}

trapezoid(3, 4, 2)


// LAB TIME: NYT Walkthrough

// ASSIGN:
//    * REPL 2.1 & 3.1;
//    * Portfolio Project;
//    * NYT Walkthrough"