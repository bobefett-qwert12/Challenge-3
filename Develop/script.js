// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var len = prompt("Input a password length between 8 and 128 characters.");
  if(len > 128 || len < 8){
    alert("Password length is outside given parameters. Please try again.");
    return generatePassword();
  };
  var attributeArray = [];
  alert("For the following prompts, enter 'Y' for yes, or 'N' for no.");
  attributeArray.push(prompt("Do you want your password to contain lower case letters?").toUpperCase());
  attributeArray.push(prompt("Do you want your password to contain upper case letters?").toUpperCase());
  attributeArray.push(prompt("Do you want your password to contain numbers?").toUpperCase());
  attributeArray.push(prompt("Do you want your password to contain special characters?").toUpperCase());
  var characters = "";
  if(attributeArray[0] === "Y"){
    characters += "abcdefghijklmnopqrstuvwxyz";
  };
  if(attributeArray[1] === "Y"){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
  if(attributeArray[2] === "Y"){
    characters += "1234567890";
  };
  if(attributeArray[3] === "Y"){
    characters += "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
  };
  if(attributeArray[0] !== "Y" &&
  attributeArray[1] !== "Y" &&
  attributeArray[2] !== "Y" &&
  attributeArray[3] !== "Y"){
    alert("Your password must contain one of the previously mentioned characters. Try again.");
    return generatePassword();
  };
  if(confirm("Are you sure all your selections are correct?")){
    for(var i=0; i<len; i++){
      password += characters.charAt(Math.floor(Math.random()*(characters.length)));
    }
  } else{
    alert("Selections not confirmed. Please try again.");
    return generatePassword();
  };
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
