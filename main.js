import { handleInputs } from "./dom-handler.js";
import { fetchBreeds } from "./fetch-data.js";
//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
// Init array of people object for use in tasks
const people = [
  {
    first_name: "Alexander",
    last_name: "Eide",
    get fullName() {
      return `${this.first_name} ${this.last_name}`;
    },
    age: 22,
    job: false,
  },
  {
    first_name: "Lars",
    last_name: "Krogsrud",
    get fullName() {
      return `${this.first_name} ${this.last_name}`;
    },
    age: 999,
    job: true,
  },
  {
    first_name: "Emil",
    last_name: "Endresen",
    get fullName() {
      return `${this.first_name} ${this.last_name}`;
    },
    age: 35,
    job: true,
  },
  {
    first_name: "Hector",
    last_name: "Acevedo",
    get fullName() {
      return `${this.first_name} ${this.last_name}`;
    },
    age: 41,
    job: true,
  },
  {
    first_name: "Bill",
    last_name: "Gates",
    get fullName() {
      return `${this.first_name} ${this.last_name}`;
    },
    age: 69,
    job: false,
  },
];
//------------------------------------------------------------------------------------------------------------------------------------------------

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
// Log first and last name using different notations
console.log(people[0].first_name, people[0]["last_name"]);
//------------------------------------------------------------------------------------------------------------------------------------------------

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
// calls getter on people object
console.log(people[1].fullName);
//------------------------------------------------------------------------------------------------------------------------------------------------

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
function birthday(person) {
  person.job ? (person.job = false) : (person.job = true);
  person.age++;
  console.table(person);
}
birthday(people[2]);
//------------------------------------------------------------------------------------------------------------------------------------------------

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
function checkAge(person) {
  if (person.age >= 18) console.log(`${person.fullName} // Party Time`);
  else console.log(`${person.fullName} // Too young`);
}
function fotballPubben(input) {
  if (input.constructor === Array) {
    input.forEach((person) => {
      checkAge(person);
    });
  } else {
    checkAge(input);
  }
}
fotballPubben(people);
//------------------------------------------------------------------------------------------------------------------------------------------------

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
function university(person, degree) {
  switch (degree) {
    case "bachelors":
      person.age += 4;
      person.degree = "bachelors";
      person.student_loan = 69420;
      break;
    case "masters":
      person.age += 2;
      person.degree = "masters";
      person.student_loan = 42069;
      break;
  }
}
university(people[0], "bachelors");
console.table(people[0]);
//------------------------------------------------------------------------------------------------------------------------------------------------

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.

(async () => {
  handleInputs();
  fetchBreeds();
})();

// displayDogs("hound", 4);
//------------------------------------------------------------------------------------------------------------------------------------------------

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
// displayDogs("akita", 4);
//------------------------------------------------------------------------------------------------------------------------------------------------
