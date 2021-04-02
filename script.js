var possibleArray = []
// Assignment Code
var generateBtn = document.querySelector("#generate");
var person = prompt("8 characters and no more than 128 characters")
var arrayUpper = ["A", "B", "C", "D", "E", "F","G","H","I","J","k","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var upperCaseInquriy = confirm("Do you want uppercase letters")


console.log(upperCaseInquriy )

var password ="";


if(upperCaseInquriy == true){
  for (var i = 0; i < 26; i++) {
    possibleArray.push(arrayUpper[i])
  }

} else {
  console.warn("okay")
}

var arrayLower = ["a","b","c","d","e","f","g","h","i","j","k","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]


var lowerCaseInquriy = confirm("Do you want lowercase letters")
console.log(lowerCaseInquriy )

if(lowerCaseInquriy == true){
  for (var i = 0; i < 26; i++) {
    possibleArray.push(arrayLower[i])
  }
} else {
  console.warn("okay")
}

var arrayNumbers = ["1","2","3","4","5","6","7","8","9","0"]

var numberCaseInquriy = confirm("Do you want numbers")


console.log(numberCaseInquriy)

if(numberCaseInquriy == true){
  for (var i = 0; i < 10; i++) {
    possibleArray.push(arrayNumbers[i])
  }
} else {
  console.warn("okay")
}

var arraySpecial =["!","@","#","$","%","^","&","*","(",")"]
var specialCaseInquriy = confirm(" Do you want special Characters")

console.log(specialCaseInquriy)

if(specialCaseInquriy == true){
  for (var i = 0; i < 10; i++) {
    possibleArray.push(arraySpecial[i])
  }
} else {
  console.warn("okay")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
var randomArray = []


for (var i = 0; i < person; i++) {
  randomArray.push(possibleArray[Math.floor(Math.random() * possibleArray.length)])
}

  return randomArray.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//when the user enters they see entry page
//when they generate password a secured password
//will be given 
//when button is clicked it calls on generate password
//need a way to ask user what they want 
// need a way to store user responses
//need a way to choose correct characters
// need a way to randomly pull characters
// need a array to push 