// STATIC LAYOUT PRESENTATIONS

// ANNOUNCEMENTS:
//    * UX/UI WORKSHOP + RSVP
//    * WEEKLY SURVEY --> https://forms.gle/9jLnoHkRVd2AMf256
//    * WHITE BOARDING ASSESSMENT
//    * STUDY LIST ON SLACK
//    * EDABIT/CODEWARS

// CHALLENGES

let netflix = {
  id: 9,
  likes: 932,
  name: "The Good Place",
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Flying" },
        { episode: 3, episodeName: "Tahani Al-Jamil" },
        { episode: 4, episodeName: "Jason Mendoza" },
        { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
      ]
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: "Everything is Great!" },
        { episode: 2, episodeName: "Dance Dance Resolution" },
        { episode: 3, episodeName: "Team Cockroach" },
        { episode: 4, episodeName: "Existential Crisis" },
        { episode: 5, episodeName: "The Trolley Problem" },
        { episode: 6, episodeName: "Janet and Michael" }
      ]
    },
    season3: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: "Everything Is Bonzer!" },
        { episode: 2, episodeName: "The Brainy Bunch" },
        { episode: 3, episodeName: "The Snowplow" },
        { episode: 4, episodeName: "Jeremy Bearimy" },
        { episode: 5, episodeName: "The Ballad of Donkey Doug" }
      ]
    }
  },
  description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
};

// OBJECT CHALLENGES
// USE THE ABOVE OBJECT
// console.log the description
// console.log episode 3 of season 2
// console.log each episode name in season 3 using only one console.log


console.log(netflix.description)
console.log(netflix.seasonInfo.season2.episodeInfo[2].episodeName)

let episodes = netflix.seasonInfo.season3.episodeInfo

episodes.forEach(episode => console.log(episode.episodeName))

for (episode of episodes) {
  console.log(episode.episodeName)
}

// FUNCTIONS/PARAMETERS CHALLENGE

function main() {
  let a = 1;
  let b = 2;
  let c = -3;
  mystery(a, b, c);
  mystery(c, 4, a);
  mystery(a + b, b + c, c + a);
}

function mystery(w, z, y) {
  console.log(`${y} + ${w} = ${z}`);
}

main();


// PALINDROME CHALLENGE

// Create a function that accepts a string as a parameter
// within the function write a conditional that checks if the word is the is the same forwards and backwards
// If it is the same both ways console.log 'The string is a palindrome'
// If it is not console.log 'It is not a palindrome'

let string = 'radar'

function checker(word) {
  let str = word.toLowerCase();
  let rev = str.split('').reverse().join('');
  // console.log(rev)
  if (str == rev) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

checker(string);


// Create a variable that contains a string where the casing (lowercase or uppercase) of the letters in the string is random. For Bronze, write a function that takes in a parameter and prints out the returned string entirely lowercased. For Silver, write a program that checks the casing of the first letter, converts all of the letters in the string to match the casing of the first letter, and prints the new string. For Gold, write a program that inverts the casing of the letter and prints the inverted string. Use a different loop for each stage.

let greeting = 'HApPy bIRthDaY';

function lowerCased(word) {
  let correctCase = '';
  for (letter in word) {
    // console.log(letter);
    if (greeting[letter] === greeting[letter].toUpperCase()) {
      correctCase += greeting[letter].toLowerCase();
    } else {
      correctCase += greeting[letter];
    }
  }
  return correctCase;
}

console.log(lowerCased(greeting));



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

// PIES ARRAY CHALLENGE
// Go back and try to build out Silver and Platinum for the Pies array.

// PIES CHALLENGE
// For Bronze, iterate over a pies array and write a conditional statement that checks if the pie includes a fruit name. Using string interpolation print a sentence that includes the name of the pie.
// For Silver, use a different loop and conditional to accomplish the same behaviour.
// For Gold, push all of the pies into a new array and have the new fruitPies array print once. 
// For Platinum, create an array of fruits. Use this array of fruit to compare against the pies array and push the pies that contain any of those fruits in the fruitPies array.

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