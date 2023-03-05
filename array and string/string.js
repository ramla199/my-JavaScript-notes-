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



// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()