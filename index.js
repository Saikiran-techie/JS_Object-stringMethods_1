                                
                                // JavaScript String Methods - 1



// 1.take two strings with spaces at starting of one string and at the ending of another string remove the spaces and 
// concat the both string and convert the combined string into uppercase string

var str1 = "     sai"           
var str2 = "kiran      "        
var trimStr1 = str1.trim()
console.log(trimStr1);
var trimStr2 = str2.trim()
console.log(trimStr2);
var combinedStr = trimStr1.concat(trimStr2).toUpperCase()
console.log(combinedStr);


// 2.Extract Middle Portion of the string and get the last index of char of extracted string and
//   Convert the portion to Lowercase

console.log(combinedStr.length);
var extractedStr = combinedStr.slice(2,6).toLowerCase()
console.log(extractedStr);
console.log(extractedStr.charAt(extractedStr.length-1));



// 3.take a single char and concat string to that char and convert the resulted string to uppercase and then extract the last second char

var char = 's'
var concatStr = char.concat(extractedStr).toUpperCase()
console.log(concatStr);
console.log(concatStr.charAt(concatStr.length-2));



// 4. We have 2 string and extract first 3 chars of first string and extract last 3 chars of another string and concat those 2 results 
//    together and first char and last char of the resulted concatinated string should as uppercase

var str_1 = "javascript";
var str_2 = "developer";

var firstPart = str_1.substring(0, 3);  // Step 1: Extract the first 3 characters of the first string
var secondPart = str_2.slice(-3);       // Step 2: Extract the last 3 characters of the second string
var combined = firstPart + secondPart;  // Step 3: Concatenate the two parts
var result =
    combined.charAt(0).toUpperCase() +
    combined.slice(1, -1) +
    combined.charAt(combined.length - 1).toUpperCase();    // Step 4: Convert the first and last characters to uppercase

console.log(result);                    // Output: "JavpeR"



// 5.You are given a string with extra spaces at the beginning and end.
// You need to trim the string, make the first and last characters uppercase, extract a specific part of the string,
// concatenate it with another string

var inputString = "   hello world   ";
var anotherString = "JavaScript";

var trimmedString = inputString.trim();     // Trim the string

var firstChar = trimmedString.charAt(0).toUpperCase();         //Make the first and last characters uppercase
var lastChar = trimmedString.charAt(trimmedString.length - 1).toUpperCase();

var middlePart = trimmedString.slice(1, -1);
var modifiedString = firstChar + middlePart + lastChar;

var extractedPart = modifiedString.substring(2, 6); // Extracts "llo "    //Extract a specific part of the string (e.g., characters from index 2 to 6)

var finalResult = extractedPart + anotherString;    // Step 4: Concatenate with another string

console.log(finalResult); // Output: "llo JavaScript"




// 6."hello there , how are you " find the index of are word in the sentence

var sentence = "hello there, how are you";
var wordToFind = "are";
var words = sentence.split(" ");  // Split the sentence into words
var wordIndex = words.indexOf(wordToFind);    // Find the word index (word-based)

console.log(wordIndex); // Output: 3








                              // JavaScript Object Methods



//1. Create an object person with properties firstName, lastName, and age. Then:
//            Access and print the firstName property.
//            Add a new property city with the value "New York" and print the updated object.

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(person.firstName);

person.city = "New York";
console.log(person);



//2. Create an object product with properties name, price, and inStock. Then:
//        Modify the price property to a new value.
//        Delete the inStock property from the object and print the updated object.

var product = {
    name: "Laptop",
    price: 1000,
    inStock: true
};

product.price = 1200;
delete product.inStock;
console.log(product);



// 3.Create an object library with nested objects for different genres.Each genre has a list of books.Then:
//        Add a new genre scienceFiction with a list of two books.
//        Access and print the first book in the fantasy genre.
//        Delete the mystery genre from the object.

var library = {
    fantasy: {
        books: ["The Hobbit", "Harry Potter"]
    },
    mystery: {
        books: ["Sherlock Holmes", "Gone Girl"]
    }
};

library.scienceFiction = {
    books: ["Dune", "Neuromancer"]
};
console.log(library.fantasy.books[0]);

delete library.mystery;
console.log(library);



// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip.Then:
//        Freeze the user object using Object.freeze().
//        Try to change the email property and check if the object is frozen using Object.isFrozen().
//        Add a new property phone to the user object and observe the result.

var user = {
    username: "saikiran_1",
    email: "sai@gmail.com",
    address: {
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};
Object.freeze(user);

user.email = "kiran@gmail.com";
console.log(Object.isFrozen(user));

user.phone = "0987654321";
console.log(user);   //email is unchanged becoz user is frozen



// 5.Create an object car with properties make, model, and price.Then:
//        Seal the object using Object.seal().
//        Try to delete the make property and check if the object is sealed using Object.isSealed().
//        Modify the price property, and check if the object is still extensible using Object.isExtensible()

const car = {
    make: "Toyota",
    model: "Corolla",
    price: 20000
};

Object.seal(car);
delete car.make;

console.log(Object.isSealed(car));
console.log(car);

car.price = 22000;

console.log(Object.isExtensible(car)); // Output: false

console.log(car); // Output: {make: "Toyota", model: "Corolla", price: 22000}

