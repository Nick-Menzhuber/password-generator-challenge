// Assignment code here

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "~", "-", "_", "|"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function getCriteria() {
  console.log("getting criteria")
  var passwordLength = prompt("Please set the password length to a number between 8 and 128");
  passwordLength = parseInt(passwordLength)
  if (passwordLength > 8 && passwordLength < 128){
  alert ("Thanks, let's make a password that is " + passwordLength + " characters long");
  }
  else{
  alert ("Please enter a number between 8 and 128");
  passwordLength = prompt ("Please set the password length to a number between 8 and 128")
  }

  {
    var useLowerCase = confirm("Should your password contain lowercase letters?");
    useLowerCase = useLowerCase;
    if (useLowerCase){
      alert ("Okay, your password will include lower case letters")
    }
    else{
      alert ("Okay, your password will not include lower case letters")
    }
    var useUpperCase = confirm("Should your password contain uppercase letters?");
    useUpperCase = useUpperCase;
    if (useUpperCase){
      alert ("Okay, your password will include upper case letters")
    }
    else{
      alert ("Okay, your password will not include upper case letters")
    }
    var useNum = confirm("Should your password contain numbers?");
    useNum = useNum;
    if (useNum){
      alert ("Okay, your password will include numbers")
    }
    else{
      alert ("Okay, your password will not include numbers")
    }
    var useSpecChars = confirm("Should your password contain special characters?");
    useSpecChars = useSpecChars;
    if (useSpecChars){
      alert ("Okay, your password will include special characters")
    }
    else{
      alert ("Okay, your password will not include special")
    }
  }

  if (useLowerCase) {
    generatedPass = generatedPass.concat(lowerCaseLetters)
  }
  if (useUpperCase) {
    generatedPass = generatedPass.concat(upperCaseLetters)
  }
  if (useNum) {
    generatedPass = generatedPass.concat(numbers)
  }
  if (useSpecChars) {
    generatedPass = generatedPass.concat(specCharacters)
  }


  //store all criteria into an object
  var criteriaObj = {
    passwordLength: getCriteria(passwordLength), 
  }
  //return the criteria object to the generate password function
  return criteriaObj
}

//define generate password function
function generatePassword() {
  console.log("generating password");
  //get criteria from user
  var userCriteria = getCriteria()
  console.log(userCriteria)

}
// Write password to the #password input
function writePassword() {

  var password = finishedPass;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var finishedPass = ""; 
for (let i = 0 ; i <= passwordLength; i ++){
  finishedPass += generatedPass[Math.floor(Math.random()* generatedPass.length)]
}
console.log(finishedPass);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Get user criteria for password
/*function getCriteria() {
  var passwordLength = prompt("Please set the password length to a number between 8 and 128");
  if (passwordLength > 8 && < 128)
  alert ("Thanks, let's make a password that is " + passwordLength + " characters long");
}else{
  alert ("Please enter a number between 8 and 128");
}*/

// more criteria
// var includeNumbers = confirm("Should the password include numbers?");
// var includeLowerCase = confirm("Should the password include lower case letters?");
// var includeUpperCase = confirm("Should the password include upper case letters?");
// var includeSpecChars = confirm("Should the password include special characters?");
