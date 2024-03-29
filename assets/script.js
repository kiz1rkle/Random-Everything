//Random Number Generator
const numBtn = document.getElementById('num-btn');
const numOutput = document.getElementById('num-output');

function randomNumHandler() {
    let num = Math.ceil(Math.random() * 12)

    numOutput.innerHTML = num
}

//Listening for this button to be clicked
numBtn.addEventListener('click', randomNumHandler)

//Random Password Generator
var generateBtn = document.querySelector("#pass-btn");

function generatePassword() {
  //misc. variables
  var characters = "";
  var generatedPassword = "";

  //windows popups
  var length = prompt("How long should the length of the password be?");
  var lowerCase = confirm("Should it include lowercase letters?");
  var upperCase = confirm("Should it include uppercase letters?");
  var numeric = confirm("Should it include numbers?");
  var specialCh = confirm("Should it include special characters?");

  //adding things to variables
  if (length < 8) {
    alert("Password must be greater than 8 characters!")
    return
  } else if (length > 128) {
    alert("Password must be less than 129!")
    return
  }
  
  if (lowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }

  if (upperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (numeric) {
    characters += "1234567890"
  }

  if (specialCh) {
    characters += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  }

  //password generator
  for (var i = 0; i <= length; i++) {
    var passwordRandomizer = Math.floor(Math.random() * characters.length);
    
    generatedPassword += characters.substring(passwordRandomizer - 1, passwordRandomizer);
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#pass-output");
  passwordText.innerHTML = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);