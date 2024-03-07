// Extract the last four characters from the string below;"extravaganza
let word = 'extravaganza';
let extractchar = word.substring(8,0);
console.log({extractchar});


// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const foodsentence = "The quick fox jumped over the lazy dog";
const insertString = foodsentence.slice(0,4) + "eat" + foodsentence.slice(4);
console.log({insertString});


// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const counttimes = "The quick brown fox jumps over the lazy dog";
console.log((counttimes.match(/the/g)).length);
console.log((counttimes.match(/brown/g)).length);


// find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const findstring1 = "The pupils are reading in the library";
const findstring2 = "The child was sitting on the table before it fell";
let result1 = findstring1.search("are");
let result2 = findstring2.search("sitting");
console.log({result1});
console.log({result2});


// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world
// Uppercase : "wonderful"
let converttoupper = "wonderful";
let converttouppercase = converttoupper.toUpperCase();
console.log({converttouppercase});
// Lowercase : "amazing"


let converttolower = "amazing";
let converttoLowercase = converttolower.toLowerCase();
console.log({converttoLowercase});
let string = "undERneath";
let converttolowercase = string.toLowerCase();
console.log({converttolowercase});
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("A wonderful world"));