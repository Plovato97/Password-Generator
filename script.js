// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //Characters 

var uChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // Uppercase characters


var numbers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9"]// Numbers lowercase

var uNumbers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"0","1","2","3","4","5","6","7","8","9"]; // Uppercase numbers


var symbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '~'] // Symbols

var nSymbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '~',
"0","1","2","3","4","5","6","7","8","9"] // Numbers, symbols

var uSymbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '~'] // Uppercase, Symbols

var uNSymbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '~', 
"0","1","2","3","4","5","6","7","8","9"]; // Special, Uppercase, Numbers

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var pwl = prompt("Choose the length of 8 - 128 characters")
var specials = confirm("Do you want SPECIAL characters?")
var uppercase = confirm("Do you want UPPERCASE characters?")
var pwnumber = confirm("Do you want NUMBER characters?")

let password = '';

console.log(pwl);
console.log(specials);
console.log(uppercase);
console.log(pwnumber);

  if(specials === false && uppercase === false && pwnumber === false) {
  for(var i = 0; i < pwl; i++){

    charPick = chars[Math.floor(Math.random() * chars.length)];
    console.log(charPick);
    password = password.toString() + charPick.toString();
    console.log(password);
  }
} else if(specials === false && uppercase === true && pwnumber === false) {
  for(var i = 0; i < pwl; i++){

    charPick = uChars[Math.floor(Math.random() * uChars.length)];
    console.log(charPick);
    password = password.toString() + charPick.toString();
    console.log(password);
  }
} else if(specials === true && uppercase === true && pwnumber === false) {
  for(var i = 0; i < pwl; i++){

    charPick = uSymbols[Math.floor(Math.random() * uSymbols.length)];
    console.log(charPick);
    password = password.toString() + charPick.toString();
    console.log(password);
  }
// } else if(specials === true && uppercase === true && pwnumber === true) {
//     for(var i = 0; i < pwl; i++){

//       charPick = uNSymbols[Math.floor(Math.random() * uNSymbols.length)];
//       console.log(charPick);
//       password = password.toString() + charPick.toString();
//       console.log(password);
//     }
} else if(specials === true && uppercase === false && pwnumber === true) {
  for(var i = 0; i < pwl; i++){

    charPick = nSymbols[Math.floor(Math.random() * nSymbols.length)];
    console.log(charPick);
    password = password.toString() + charPick.toString();
    console.log(password);
  }
} else if(specials === true && uppercase === true && pwnumber === true) {
  for(var i = 0; i < pwl; i++){

    charPick = uNSymbols[Math.floor(Math.random() * uNSymbols.length)];
    console.log(charPick);
    password = password.toString() + charPick.toString();
    console.log(password);
  }
} else if(specials === true && uppercase === true && pwnumber === true) {
  for(var i = 0; i < pwl; i++){

    charPick = uNSymbols[Math.floor(Math.random() * uNSymbols.length)];
    console.log(charPick);
    password = password.toString() + charPick.toString();
    console.log(password);
  }
}
  return password;
};
