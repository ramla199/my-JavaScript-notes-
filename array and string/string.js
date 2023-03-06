// A JavaScript string is zero or more characters written inside quotes.
//1# let text = "John Doe";
//2# let num = 5;
// let str= num.toString()
//3# Back-Tics Syntax
//// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
//Synonyms:
// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax
// let text = `Hello World!`;

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
// String split()

// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// JavaScript Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()


// charAt()	Returns the character at a specified index (position)
// charCodeAt()	Returns the Unicode of the character at a specified index
// concat()	Returns two or more joined strings
// constructor	Returns the string's constructor function
// endsWith()	Returns if a string ends with a specified value
// fromCharCode()	Returns Unicode values as characters
// includes()	Returns if a string contains a specified value
// indexOf()	Returns the index (position) of the first occurrence of a value in a string
// lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
// length	Returns the length of a string
// localeCompare()	Compares two strings in the current locale
// match()	Searches a string for a value, or a regular expression, and returns the matches
// prototype	Allows you to add properties and methods to an object
// repeat()	Returns a new string with a number of copies of a string
// replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
// search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
// slice()	Extracts a part of a string and returns a new string
// split()	Splits a string into an array of substrings
// startsWith()	Checks whether a string begins with specified characters
// substr()	Extracts a number of characters from a string, from a start index (position)
// substring()	Extracts characters from a string, between two specified indices (positions)
// toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
// toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
// toLowerCase()	Returns a string converted to lowercase letters
// toString()	Returns a string or a string object as a string
// toUpperCase()	Returns a string converted to uppercase letters
// trim()	Returns a string with removed whitespaces
// trimEnd()	Returns a string with removed whitespaces from the end
// trimStart()	Returns a string with removed whitespaces from the start
// valueOf()	Returns the primitive value of a string or a string object