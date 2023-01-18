// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// From Developer James
// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("wordCoder", () => {
  it("takes in a string and returns a string with a coded message", () => {
      expect(wordCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(wordCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(wordCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.
// PSEUDOCODE

// Input: a string
// Output: the inputted string in a coded format

// Create and object of key/value pairs for the original characters and what we want the replacements to be
// Create a function called "wordCoder" that has a parameter of a string
// Use the ".replace" method to search through each string
// Use regex to look for the charactsters we are interested in, globally and for upper and lower case
// When a matching character is found, use the object to replace the found character with the desired character

// Explanation
  // The replace() method searches a string for a value or a regular expression.
  // The replace() method returns a new string with the value(s) replaced.

  // https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call

const replacementLetters = {
  A: 4,
  a: 4,
  E: 3,
  e: 3,
  I: 1,
  i: 1,
  O: 0,
  o: 0
}

const wordCoder = (string) => {
  return string.replace(/[aeio]/gi, (match) =>
      replacementLetters[match])
  }

// Different approach from Developer Chris 
const coder = (str) => {
  string = str.split('')
  for (i=0; i < string.length; i++) {
      if (string[i] === 'e' || string[i] === 'E') {
          string.splice(i,1,'3')
      } else if (string[i] === 'a' || string[i] === 'A') {
          string.splice(i,1,'4')
      } else if (string[i] === 'i' || string[i] === 'I') {
          string.splice(i,1,'1')
      } else if (string[i] === 'o' || string[i] === 'O') {
          string.splice(i,1,'0')
      }
  }
  return string.join('')
}

// From Developer Bora
// PSEUDOCODE:
// input: a string that takes in a word
// output: a new string with the word converted into a new word

// process:
// delcare a function called "wordDecoder"
// after declaring function, give it the parameter of "string"
// create a for loop to iterate each letter
// referring to the resource, using switch statements, create a case for each letter aeio, to convert to 4310
// create an additional switch statement to account for the capitalized letter of "E" to also convert to 3

// references/resources:
// https://www.w3schools.com/js/js_switch.asp


const wordDecoder = (string) => {
    let letterDecoded = ""
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
                letterDecoded += "4"
                break
            case "e":
                letterDecoded += "3"
                break
            case "i":
                letterDecoded += "1"
                break
            case "o":
                letterDecoded += "0"
                break
            case "E":
                letterDecoded += "3"
                break
            default:
                letterDecoded += string[i]
        }
    }
    return letterDecoded
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
describe('dullHouse', () => {
  it('takes in an array of 5 numbers and determines whether or not the array is a "full house"', () => {

    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true

    expect(dullHouse(hand1)).toEqual(true)
    expect(dullHouse(hand2)).toEqual(false)
    expect(dullHouse(hand3)).toEqual(false)
    expect(dullHouse(hand4)).toEqual(true)
  })
})
// a) Create a test with expect statements using the variable provided.
// I failed. YES!!!!
// ● dullHouse › takes in an array of 5 numbers and determines whether or not the array is a "full house"

// ReferenceError: dullHouse is not defined

// b) Create the function that makes the test pass.
// PSEUDOCODE
  // declare function named dullHouse
  // input - array of numbers
  // output - boolean
    // If given [5, 5, 5, 3, 3], return true
    // If given [5, 5, 3, 3, 4], return false
    // use sort method to place the values in ascending order
  // iterate across the array to access values at the different indexes
  // check to see if they are the same
  // if two values match and three other values match in the same array then it is a full house return true
  // using bracket notation to obtain the values
  // compare using strict equality operators and logical operators to see if the values match
  // if the conditions are not met return false

// FUNCTION
const dullHouse = (array) => {
  array.sort()
  
  if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4]) {
    return true
  } else if(array[0] === array[1] && array[2] === array[3] && array[2] === array[4]) {
    return true
  } else {
    return false
  }
  
}