// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","/","*","{","}","[","]","|",";",":","'","?",">","<","."];
var characters = []

function generatePassword() {
  alert("Click Ok to generate a random password.");
  var passwordLength = prompt("How many characters would you like your password to contain? Note: The number of characters must not be less than 8 nor more than 128.");
  if (passwordLength < 8 || passwordLength > 128) {alert("The value you have entered can not be used"); prompt("How many characters would you like your password to contain? Note: The number of characters must not be less than 8 nor more than 128.")};
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?"); 
  var includeSpecial = confirm("Include special characters?");
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {alert("Not enough character choices selected to generate password.")
  return "Not enough character choices selected to generate password"};
  if (includeLowercase === true) {characters = characters.concat(lowercase)};
  if (includeUppercase === true) {characters = characters.concat(uppercase)};
  if (includeNumbers === true) {characters = characters.concat(numbers)};
  if (includeSpecial === true) {characters = characters.concat(special)};
  console.log(typeof(characters));
  console.log (characters);
  var randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
   var generatedPassword = Math.floor(Math.random()*characters.length);
    randomPassword += characters[generatedPassword]};
    return randomPassword;
  } 