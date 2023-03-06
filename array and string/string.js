// A JavaScript string is zero or more characters written inside quotes.
// let text = "John Doe";

// Escape Character
// The backslash (\) escape character turns special characters into string characters:

// Code	Result	Description
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash

// Six other escape sequences are valid in JavaScript:

// Code	Result
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator


// STRING METHOD same as arrays method

// String length -> how many el is there
// String slice() -> 
// let text2 = "Apple, Banana, Kiwi";
// console.log(text2.slice(-2)) //-> wi
//  console.log(text2.slice(7, 13)); // ->  Banana
 // not included 13 - 2-.slice(7) -> Banana, Kiwi  3-.slice() ->all

// String substring() -> substring() is similar to slice()
// let str = "Apple, Banana, Kiwi";
// console.log(str.substring(7, 13)); //-> Banana
// // The difference is that start and end values less than 0 are treated as 0 in substring()
// console.log(str.substring(-2)); //-> Apple, Banana, Kiwi

// String substr() -> substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
// more note

// String replace()
//// The replace() method replaces a specified value with another value in a string:
// let text = "Please visit Microsoft!";
// console.log(text.replace("Microsoft", "W3Schools")); // -> Please visit W3Schools!
// Note
//// The replace() method does not change the string it is called on. in other word it doesn’t modify the original
//  let text = "Please visit Microsoft!";
//  console.log(text.replace("Microsoft", "W3Schools") )// -> Please visit W3Schools! 
//  console.log( text ) // -> Please visit Microsoft!
//// The replace() method returns a new string.
//// The replace() method replaces only the first match
//// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
// String replaceAll() -> To replace all matches, use a regular expression with a /g flag (global match):
// String toUpperCase()// String toLowerCase()
// String concat()
// String trim()// String trimStart()// String trimEnd()
// String padStart()// String padEnd()
// String charAt()// String charCodeAt()
// String split()