// Define variables

var passwordlength = ""
var isLower
var isUpper
var isNumeric
var isSpecial
var newpassword = ""
var lowerABC = "abcdefghijklmnopqrstuvwxyz";
var upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sym = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var selectioncriteria = []


function pwprompt() {
    do { // Create prompt for password length
        passwordlength = prompt("How many characters in your password?")
        /*console.log(passwordlength)*/
        if (passwordlength == null) {
            alert("Please specify how many characters")
        }
          // Conditional statement to check if password length is a number. Prompts end if this evaluates false
        else if (isNaN(passwordlength) === true) {
            alert('Password length must be provided as a number');
        }
        // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
        else if (passwordlength < 8) {
            alert('Password length must be at least 8 characters');
        }
    
        // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
        else if (passwordlength > 128) {
            alert('Password length must less than 129 characters'); 
            }
    } while (passwordlength == null || isNaN(passwordlength) === true || passwordlength < 8 || passwordlength > 128)
}
function criteriafunc() {
    do {
        // Use confirm to ask if user wants lower case letters
        isLower = confirm("Do you want lower case letters?")
        /*console.log(isLower)*/
        if (isLower == true) {
            selectioncriteria.push('lower');
        }
        // Use confirm to ask if user wants upper case letters
        isUpper = confirm("Do you want upper case letters?")
        /*console.log(isUpper)*/
        if (isUpper == true) {
            selectioncriteria.push('upper');
        }
        // Use confirm to ask if user wants numbers  
        isNumeric = confirm("Do you want a number?")
        /*console.log(isNumeric)*/
        if (isNumeric == true) {
            selectioncriteria.push('number');
        }
        // Use confirm to ask if user wants special characters  
        isSpecial = confirm("Do you want a special character?")
        /*console.log(isSpecial)*/
        if (isSpecial == true) {
            selectioncriteria.push('special');
        }
        
        if (isLower == false && isUpper == false && isNumeric == false && isSpecial == false) {
            alert("Please choose at least one criteria")
        }
    } while (isLower == false && isUpper == false && isNumeric == false && isSpecial == false) // If user clicks Cancel on each prompt, alert prompt and bring them back to the loop until at least one criteria is met
}

/*console.log(selectioncriteria)*/

// function to return a random letter in the alphabet
function genChar(selCri) {
    var x
    if (selCri == 'lower') {
        x = Math.floor(Math.random() * 26)
        /*console.log("lower: " + lowerABC.charAt(x))*/
        return(lowerABC.charAt(x))  // result of math.random will be a number which we will get using charAt for lowerABC, then finally return the value to the for loop
    } else if (selCri == 'upper') {
        x = Math.floor(Math.random() * 26)
        /*console.log("upper: " + upperABC.charAt(x))*/
        return(upperABC.charAt(x))
    } else if (selCri == 'number') {
        x = Math.floor(Math.random() * 10)
        /*console.log("number: " + x)*/
        return(x) // return random number from 0-9
    } else {
        x = Math.floor(Math.random() * 32)
        /*console.log("special: " + sym.charAt(x))*/
        return(sym.charAt(x))
    }
}

function mainpwfunc() {
    pwprompt();
    criteriafunc();
    for(var i = 0; i < passwordlength; i++) {
        /*console.log("Iteration number: " + i)*/
        var y = Math.floor(Math.random() * selectioncriteria.length) // a random number between 1 to however many selection criteria the user selected
        newpassword += genChar(selectioncriteria[y])
    }
    document.getElementById("password").innerHTML = newpassword;
}


