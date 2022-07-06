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
//regex => regular expressions
console.log(initialPoem.toLowerCase().replaceAll("verse", "line"))

//FUNCTIONS

// function sum() {

// }

// const sum = () => {

// }


const sum = function (firstNum, secondNum, thirdNum) {
  //   console.log(firstNum + secondNum + thirdNum)
  let result = firstNum + secondNum + thirdNum
  return result
}

let resultOfTheSum = sum(2,2,2) //6
let anotherSum = sum(5,5,5) //15
let yetAnotherSum = sum(10,10,10) //30

let finalSum = sum(resultOfTheSum, anotherSum, yetAnotherSum)
console.log(finalSum);
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ];

// build a function that looks through all the movies in the array and RETURNS all the 
// elements which have a certain string (params) inside the title

const searchMovies = function(query /* string */) {
    let results = []
    for(let i = 0; i < movies.length; i++) {
        //1. i = 0;     true;         movies[0] => first element
        //2. i = 1;     true;         movies[1] => second element
        //....

        // if(movies[i].Title.toLowerCase().includes(query.toLowerCase())) {
        const movie = movies[i]
        // if(movie.Title.toLowerCase().includes(query.toLowerCase()))
        let lowerCaseTitle = movie.Title.toLowerCase()
        let queryLowerCase = query.toLowerCase()
        if(lowerCaseTitle.includes(queryLowerCase)) { 
            results.push(movie)
        }
    }
    return results
}

let foundMovies = searchMovies("avengers")
console.log(foundMovies)

//create a function that takes threre parameters, two numbers and a string representing an operation 
//("sum", "diff", "mult", "div") and calculates the result
// ex 2,5,"sum" => 7
// ex 6,6, "mult" => 36


const fakeCalculator = function(num1/*num*/, num2/*num*/, operation/*string*/) {
    let result = 0
    switch(operation) {
        case "sum":
            result = num1 + num2
        break
        case "diff":
            result = num1 - num2
        break
        case "mult":
            result = num1 * num2
        break
        case "div":
            result = num1 / num2
        break
        case "abs":
            result = Math.abs(num1 - num2)
        break
        case "by3":
            result = (num1 + num2) * 3
        break
        default: console.log("You have not entered a valid operation.")
    }
    return result
}

let res1 = fakeCalculator(5,5,"mult") //25
let res2 = fakeCalculator(56,89,"abs") // 33



const shoppingCart = [
    { id: 14253, price: 100, name: "Ergonomic Mouse", quantity: 1 },
    { id: 22223, price: 200, name: "Ergonomic Keyboard", quantity: 6 },
    { id: 376987, price: 35, name: "Custom Keycap Kit", quantity: 1 },
    { id: 453453, price: 100, name: "Ergonomic Mouse", quantity: 3 },
  ];

  const shoppingCart2 = [
    { id: 15433, price: 130, name: "Ergonomic Mouse", quantity: 7 },
    { id: 23354, price: 2300, name: "Ergonomic Keyboard", quantity: 2 },
    { id: 353687, price: 35, name: "Custom Keycap Kit", quantity: 3 },
    { id: 454487, price: 300, name: "Ergonomic Mouse", quantity: 1 },
  ];
  
  /* 
    Given the shoppingCart array above, write the following functions:
    - getTotalPrice: returns the total price of all items in the cart.
    - getTotalQuantity: returns the total quantity of all items in the cart.
    - getItemQuantity: given an item id, returns the quantity of that item in the cart.
    - getMostExpensiveItem: returns the most expensive item in the cart.
    - addItem: given an item, adds the item to the cart.
    */
  

const getTotalPrice = function(cart) {
    let finalSum = 0
    for(let i = 0; i < cart.length; i++) {
        finalSum += cart[i].price
    }
    return finalSum
}

console.log(getTotalPrice(shoppingCart),getTotalPrice(shoppingCart2))

const getTotalQuantity = function(cart) {
    let finalQuantity = 0
    for(let i = 0; i < cart.length; i++) {
        finalQuantity += cart[i].quantity

    }
    return finalQuantity
}

console.log(getTotalQuantity(shoppingCart),getTotalQuantity(shoppingCart2))

const getItemQuantity = function(id, cart) {
    let itemQuantity = 0
    for(let i = 0; i < cart.length; i++) {
        const cartItem = cart[i] 
        if(cartItem.id === id) { //only true ONCE!!
            itemQuantity = cartItem.quantity
        } else continue;
    }
    return itemQuantity
}

console.log(getItemQuantity(453453, shoppingCart))
console.log(getItemQuantity(22223, shoppingCart))

// const shoppingCart2 = [
//     { id: 15433, price: 130, name: "Ergonomic Mouse", quantity: 7 },
//     { id: 23354, price: 2300, name: "Ergonomic Keyboard", quantity: 2 },
//     { id: 353687, price: 35, name: "Custom Keycap Kit", quantity: 3 },
//     { id: 454487, price: 300, name: "Ergonomic Mouse", quantity: 1 },
//   ];

// const shoppingCart = [
//     { id: 14253, price: 100, name: "Ergonomic Mouse", quantity: 1 },
//     { id: 22223, price: 200, name: "Ergonomic Keyboard", quantity: 6 },
//     { id: 376987, price: 35, name: "Custom Keycap Kit", quantity: 1 },
//     { id: 453453, price: 100, name: "Ergonomic Mouse", quantity: 3 },
//   ];

const getMostExpensiveItem = function(cart) {
    let maxPrice = 0;
    // let arrayOfPrices = [] //ALT WAY
    for(let i = 0; i < cart.length; i++) {
        console.log(cart[i])
        let cartItem = cart[i]
        
        if(cartItem.price > maxPrice) {
            console.log(cartItem.price, maxPrice, cartItem.price > maxPrice);
            maxPrice = cartItem.price
        } else continue
        // 1. i = 0; cart[0]; 130 > 0 maxPrince => 130
        // 2. i = 1; cart[1]; 200 > 100 maxPrice => 200
        // 3. i = 2; cart[2]; 35 !> 200 maxPrice => 200
        // 4. i = 3; cart[3]; 100 !> 200 maxPrice => 200

        //ALT WAY
        // arrayOfPrices.push(cartItem.price) //an array of numbers
        // console.log(arrayOfPrices);
    }
    return maxPrice
    //ALT WAY
    // return Math.max(...arrayOfPrices) //WILL GO OVER THIS AGAIN IN M4
}

console.log(getMostExpensiveItem(shoppingCart2))

const addItem = function(item /*obj*/, cart/*arr*/) {
    let newCart = cart
    newCart.push(item)
    return newCart
}
let newItem = {id: 3849085, price: 20, name: "LCD Screen", quantity: 1}
console.log(addItem(newItem, shoppingCart))

//ERRORS: 
// XXXXX.push() is not a function => XXXXX is probably not an array
// XXXXXXXX.replace() is not a function => XXXXXXXX is not a string

//Cannot access property XXXXX of undefined => The value before XXXXX DOESN'T HAVE A VALUE, undefined