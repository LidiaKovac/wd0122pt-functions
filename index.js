//recap
//if - else
let years = 22
if (years > 21) {
  console.log("The user is over 21!")
} else {
  console.log("The user is underage!")
}

//print a day of the week based on a number 0 - 6
let day = 5
// if (day === 0) {
//   console.log("Sunday")
// } else if (day === 1) {
//   console.log("Monday")
// } else if (day === 2) {
//   console.log("Tuesday")
// } else if (day === 3) {
//   console.log("Wed")
// } else if (day === 4) {
//   console.log("Thu")
// } else if (day === 5) {
//   console.log("Fri")
// } else if (day === 6) {
//   console.log("Sat")
// }

switch (day) {
  case 0: // if day === 0
    console.log("Sun")
    break
  case 1: //if day === 1
    console.log("Mon")
    break
  case 2:
    console.log("Tue")
    break
  case 3:
    console.log("Wed")
    break
  case 4:
    console.log("Thu")
    break
  case 5:
    console.log("Fri")
    break
  case 6:
    console.log("Sat")
    break
  default:
    console.log("The number is not between 0 and 6")
}

// .toLowerCase() / .toUpperCase() makes the string all lower or upper case

let name = "Lidia"
let upperCaseValue = name.toUpperCase()
console.log(upperCaseValue)
console.log(name.toLowerCase()) //search algorithms and .includes()
let title = "Harry Potter"
// let hasHarryInTitle = title.includes("harry") //false
let hasHarryInTitle = title.toLowerCase().includes("harry") //true

// .includes(substr) checks if substr is included in the main string, returns true/false

let bigString = "The Big Brown Fox Jumps Over The Lazy Dog"
let substring = "dog"
if (bigString.toLowerCase().includes(substring.toLowerCase())) {
  console.log("The string includes", substring)
} else {
  console.log("The string doesn't include", substring)
}

// .concat(str) concatenates a string to the main string, returns a new string
let firstString = "Hello"
let secondString = " World"
let thirdString = "!"

let result = firstString.concat(secondString, thirdString)
console.log(result)

// .repeat(num) concatenates a string a num amount of times

let oneLaugh = "ah"
let laughs = oneLaugh.repeat(10)
console.log(laughs)

// .replace(str, str2) replaces the first occurrence of str with str2

let initialPoem = "Verse 1 / Verse 2     / Verse    3"
// console.log(initialPoem.replace("Verse", "CHANGED VERSE"))

// .replaceAll(str, str2) replaces all occurrences of str with str2

console.log(initialPoem.toLowerCase().replaceAll("verse", "line"))
