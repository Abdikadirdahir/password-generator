// Assignment Code
var generateBtn = document.querySelector("#generate");

var arrayUpper = ["A", "B", "C", "D", "E", "F","G","H","I","J","k","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var upperCaseInquriy = confirm("Do you want uppercase letters")


console.log(upperCaseInquriy )

var password ="";


if(upperCaseInquriy == true){
  var person = prompt("choose any uppercase letters " + arrayUpper)
} else {
  console.warn("okay")
}

var arrayLower = ["a","b","c","d","e","f","g","h","i","j","k","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]


var lowerCaseInquriy = confirm("Do you want lowercase letters")
console.log(lowerCaseInquriy )

if(lowerCaseInquriy == true){
  var person = prompt("choose any lowercase letter " + arrayLower)
} else {
  console.warn("okay")
}

var arrayNumbers = ["1","2","3","4","5","6","7","8","9","0"]

var numberCaseInquriy = confirm("Do you want numbers")


console.log(numberCaseInquriy)

if(numberCaseInquriy == true){
  var person = prompt("choose any number " + arrayNumbers)
} else {
  console.warn("okay")
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("Password");

  passwordText.value = password;

}

function generatePassword(){
  console.log("")
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