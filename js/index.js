// 1
let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);


// 2
let email = "example@gmail.com";
let hasAtSymbol = email.includes("@");
let emailLength = email.length;

console.log("Містить @:", hasAtSymbol);
console.log("Кількість символів:", emailLength);


// 3
let word1 = "My";
let word2 = "name";
let word3 = "is";

let fullName = word1 + " " + word2 + " " + word3 + " Viktor";
console.log(fullName);


// 4
let userName = "V2l3nt7nka4U";
let payment = 918;

alert(`Дякуємо що обрали нас, ${userName}! До сплати ${payment} гривень і "S.T.A.L.K.E.R. 2." вже у вас в кишені`);