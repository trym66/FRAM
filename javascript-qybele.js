
// Her har jeg lagd en "function" som skriver ut countdown fra 5-1 
// Så jeg alltid kan bruke "Countdown" til å skrive den flere ganger

function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}


// Setting up the race

countdown()


// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()



// Kode for å fortelle hvor mye penger som blir trukket fra creditcard


const getSpendAlert = function(amount){
    return `Warning! You just spent £${amount}!`
}

console.log(getSpendAlert(150))


// Gir tilgang til admin til brukere på en enkel måte

function setPermissionLevel(permissionLevel, ...names) {
    
    names.forEach((name)=> 
        console.log(`${name} now has ${permissionLevel} level access.`))
    
}

setPermissionLevel('admin', 'Dave', 'Sally')


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 21

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 20) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}



// Objects - store data in-depth - composite / complex data type
// key-value pairs

// Create an object

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]   //array, "når man skriver tekst og ikke tall "
}
console.log( course["tags"] )


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {

    title: "Live like a king in my castle",
    price: 190,
    // boolean
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)


//HTML innertext
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


//API'S

/**
 * Challenge:
 * 
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 * 
 * Documentation: https://jsonplaceholder.typicode.com/
 * 
 * Log the response data to the console
 */


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => console.log(data))