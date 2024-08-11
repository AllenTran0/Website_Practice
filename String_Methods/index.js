// string methods = allow you to manipulate and work with text (strings)

let userName = " BroCode    ";


// console.log(userName.charAt(1));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
userName = userName.trim();

console.log(userName);

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));
console.log(userName.includes(" "));

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
// phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);