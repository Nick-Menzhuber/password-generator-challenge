// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChars = "!@,#$%&*{}[]/\\+=";
var passCharTypes = "";

// Point the final password to the #password input
function enterpassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//generate password
function generatePassword(){
  //password container
  var result = "";
  //user sets password length
  var length = prompt("Please enter the number of characters the password should be, between 8 and 128.");
  if(isNaN(length)){
    alert("Please enter a valid number.");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please set a valid password length between 8 and 128.");
    return generatePassword()
  }
  //user sets character types
  var hasUpperCase = confirm("Should your password include upper case letters?");
  var hasLowerCase = confirm("Should your password include lower case letters?");
  var hasNumbers = confirm("Should your password include numbers?");
  var hasSpecialChars = confirm("Should your password include special characters?");

  if(!hasUpperCase&&!hasLowerCase&&!hasNumbers&&!hasSpecialChars){
    alert("Please select at least one character type.");
    return generatePassword()
  }

  if(hasUpperCase){
    passCharTypes += upperCase
  }
  if(hasLowerCase){
    passCharTypes += lowerCase
  }

  if(hasNumbers) {
    passCharTypes += numbers
  }

  if(hasSpecialChars) {
    passCharTypes += specialChars
  }

for (var i = 0; i < length; i++) {
  result += passCharTypes.charAt(Math.floor(Math.random() * passCharTypes.length));
}
return result;

}