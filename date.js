// date and time
// const date = new Date();
// console.log(date) // 2023-02-18T12:58:11.779Z or the date now
// console.log(typeof date) // object

// // years, months,day,time   typeof == number
// console.log('getFullYear:', date.getFullYear()); // getFullYear: 2023
// console.log('getMonth:', date.getMonth()); // getMonth: 1  (January:0, February:1, ... etc )  note: we see number not the exact month because it shows us the position of the month some kind like array of months 
// console.log('getDate:', date.getDate(), typeof date.getDate()); // getDate: 18 number
// console.log('getDay:', date.getDay()); // getDay: 6 // sunday: 0, Monday: 1 ... etc
// console.log('getHours:', date.getHours()); // getHours: 13
// console.log('getMinutes:', date.getMinutes()); // getMinutes: 12
// console.log('getSeconds:', date.getSeconds()); // getSeconds: 13

// timestamps is milliseconds starting from the first month of the year

// console.log('timestamp:', date.getTime()); // timestamp: 1676726104570 
const before = new Date('February 1 2022 7:30:59');
const now = new Date();
console.log(now.getTime(), before.getTime()); // 1676726689089 1643700659000
const diff = now.getTime() - before.getTime(); 
console.log(diff); // 33026106153
// 1 second = 1000 millisecond 
// 1 minute = 60 second   
// 1 minute = millisecond/1000/60 ;
const mins = Math.round(diff/ 1000/ 60); 
const hours = Math.round(mins/ 60 );
const days = Math.round(hours / 24);


// date strings
// console.log(date.toDateString()); // Sat Feb 18 2023
// console.log(date.toTimeString()); // 13:18:47 GMT+0000 (Coordinated Universal Time)
// console.log(date.toLocaleString()); // 2/18/2023, 1:18:47 PM


