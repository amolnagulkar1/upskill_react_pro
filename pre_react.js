// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sqr = array.map((num) =>  num * 2 )
console.log(sqr)

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

function grade(score) {
  return (score >= 90) ? 'A' :
    (score >= 70) ? 'B' :
      (score >= 50) ? 'C' :
        (score >= 40) ? 'D' : 'F';
}

console.log(grade(80))

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

let object1 = {
  'CompanyName': 'Tata',
  'Model': 'Punch',
  'Year': 2024
}

let changeYear = (num) => {
  return object1.Year = num;
}

console.log(changeYear(2005))

let { Model , Year} = object1;

console.log(Model)
console.log(Year)


// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

let isprime = (num) => {
  if (num > 0 && num % 1 == 0 && num % 2 !==0) {
    console.log(`The ${num} number is prime`)
  }  else {
    console.log(`${num} is not prime`)
  }
}

isprime(3)

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]

let primeNumber = arr1.filter(isprime)


// Q5 -  State different use cases of map, filter and reduce functions.

// 1. map Function
// The map function is used to transform or apply a function to each element in an array, returning a new array with the modified elements.

// Use Cases:
// Transforming Data: Convert an array of temperatures from Celsius to Fahrenheit.
// Extracting Properties: Given an array of objects, extract a specific property from each object (e.g., names of users).
// Modifying Each Element: Multiply each number in an array by 2

// 2. filter Function
// The filter function is used to filter out elements from an array that do not meet a condition, returning a new array with only the elements that pass the test.

// Use Cases:
// Filtering Data: Get only active users from a list of users.
// Prime Numbers: Find prime numbers in an array.
// Removing Invalid Entries: Filter out null or undefined values from an array.
// Conditionally Selecting Elements: Extract all even numbers from an array.

// 3. reduce Function
// The reduce function is used to accumulate a single value from an array by applying a reducer function. It reduces the array to a single result (such as a sum, product, or an object).

// Use Cases:
// Summing Values: Sum all the numbers in an array.
// Product of Numbers: Multiply all numbers in an array to get the product.
// Counting Occurrences: Count the frequency of items in an array.
// Flattening Arrays: Merge an array of arrays into a single array.
// Group By Property: Create a grouped object from an array of objects.


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.


async function getallusers() {
  try {
    const respose = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(respose)
  const data =await respose.json()
  console.log(data)

  } catch (error) {
    console.log(error)
  }
}

getallusers()


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((data) => {
//   return data.json()
//   })
//   .then((user) =>{
//   console.log(user)
// })
//   .catch((error) => {
//   console.log(error)
// })


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.


const person = {
  name: "Amol Nagulkar",
  address: {
    street: "123 Main St",
    city: "India_pune",
    postalCode: "10001"
  },
  contact: {
    email: "amolnagulkar@gmail.com",
    phone: "9970689858"
  }
};


const phoneNumber = person.contact?.phone;

console.log(phoneNumber);
