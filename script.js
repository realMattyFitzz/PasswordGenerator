// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




}
function generatePassword() {
  var length = 12,
    options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()≈ç√∫˜µ˚¬∆˙©ƒ∂ßåœ∑´®†¥¨ˆøπ",
    retVal = "";
  for (var i = 0, n = options.length; i < length; ++i) {
    retVal += options.charAt(Math.floor(Math.random() * n));
    
  }
  return retVal;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
