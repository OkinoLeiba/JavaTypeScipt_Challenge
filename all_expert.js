// Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale).
// Check the Resources tab for more info on this.

// Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these
//  steps:

// Generate 3 capital letters from the surname, if it has:

// At least 3 consonants then the first three consonants are used. (Newman -> NWM).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
// Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).

// Generate 3 capital letters from the name, if it has:

// Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
// More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
// Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).

// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

// Take the last two digits of the year of birth (1985 -> 85).
// Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
// For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
// For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
// Examples


// fiscalCode({
//   name: "Matt",
//   surname: "Edabit",
//   gender: "M",
//   dob: "1/1/1900"
// }) ➞ "DBTMTT00A01"

// fiscalCode({
//   name: "Helen",
//   surname: "Yu",
//   gender: "F",
//   dob: "1/12/1950"
// }) ➞ "YUXHLN50T41"

// fiscalCode({
//   name: "Mickey",
//   surname: "Mouse",
//   gender: "M",
//   dob: "16/1/1928"
// }) ➞ "MSOMKY28A16"

// Notes
// Code letters must be uppercase.
// Date of birth is given in D/M/YYYY format.
// The conversion table for months is already in the starting code.
// Y is not a vowel.

function fiscalCode(code_object) {


    const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
    7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

    const consonant_str_surname = code_object.surname.toLowerCase().replace(/[aeiou]/gi, "").trim();
    const consonant_str_name = code_object.name.toLowerCase().replace(/[aeiou]/gi, "").trim();

    const consonant_str = s => s.toLowerCase().replace(/[aeiou]/gi, "").trim();
    const vowel_str = s => s.toLowerCase().replace(/[^aeiou]/gi, "").trim();

    var test = code_object.surname.length < 3 ? (consonant_str(code_object.surname) + "x").slice(0, 3) : (consonant_str(code_object.surname)).slice(0, 3)

    var test2 = vowel_str(code_object.surname)
  

  
    var sub_surname = ""
    if(code_object.surname.length < 3) {
        sub_surname = code_object.surname.match(/[^aeiou]/i) + code_object.surname.match(/[aeiou]/i) + "x";
    }
    else {
        if(consonant_str_surname.length >= 3) {
            sub_surname = consonant_str_surname.substring(0,3) 
        }
        else if(consonant_str_surname.length < 3) {
            sub_surname = consonant_str_surname + code_object.surname.match(/[aeiou]/i)
        }
        else {}
    }

    
    var sub_name = ""
    if(code_object.name.length < 3) {
        sub_name = code_object.name.match(/[^aeiou]/i) + code_object.name.match(/[aeiou]/i) + "x";
    }
    else {
        if(consonant_str_name.length == 3) {
            sub_name = consonant_str_name;
        }
        else if(consonant_str_name.length > 3) {
            sub_name = consonant_str_name[0] + consonant_str_name[2] + consonant_str_name[3]
        }
        else if(consonant_str_surname.length < 3) {
            sub_name = consonant_str_name + code_object.name.match(/[aeiou]/i)
        }
        else {}
    }


    var date_str = code_object.dob.split("/");
    var year_str = date_str[2];
    var month_str = date_str[1];
    var day_str = date_str[0];

    var [day_str, month_str, year_str] = date_str = code_object.dob.split("/");

    var year_str_sub = year_str.substring(2,year_str.length);

;
    var letter_month = months[month_str];
    
    var daybirth_str = ""
    if(code_object.gender == "M" && day_str < 10) {
        daybirth_str = "0" + day_str;
    }
    else if(code_object.gender == "M") {
        daybirth_str = day_str;
    }
    else {
        if(code_object.gender == "F") {
            daybirth_str = (Number(day_str) + 40).toString();
        }
    }

   

    let fiscal_code= sub_surname.concat(sub_name, year_str_sub, letter_month, daybirth_str).toLocaleUpperCase();

    return fiscal_code;
  }



fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
});

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
});


fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
});


// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter
//  by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 
// 3, w, x, y and z would map to z, a, b and c.

// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.


// caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

// caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
// ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

// caesarCipher("A friend in need is a friend indeed", 20)
// ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
// Notes
// All test input will be a valid ASCII string.



const caesarCipher = (message, shift) => {
    // var letter = "x";
    // var test = (122 - letter.charCodeAt(0) + 10) + 97;

    let cipher = "";
    
    for(var letter of message) {
        // test for uppercase letter by ascii code-decimal
        if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            if((letter.charCodeAt(0) + shift) > 90) {
                cipher += String.fromCharCode((65 + (letter.charCodeAt() - 65 + shift) % 26));
            }
            else {
                cipher += String.fromCharCode(letter.charCodeAt(0) + shift);
            }
        }
        // test for lowercase letter by ascii code-decimal
        else if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            if((letter.charCodeAt(0) + shift) > 122) {
            cipher += String.fromCharCode((97 + (letter.charCodeAt() - 97 + shift) % 26));
            }
            else {
                cipher += String.fromCharCode(letter.charCodeAt(0) + shift);
            }
        }
        else if(!(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) && !(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)) {
            cipher += letter;
        }
        // execute and address later
        else {
            cipher.concat((String.fromCharCode(letter.charCodeAt(0) + shift)));
        }
        
    }

    let chipher2 = "";
    for(var i = 0; i < message.length; i++) {
        if(message.charCodeAt(i) > 90 || message.charCodeAt(i) > 122) {
            chipher2 += String.fromCharCode(219 - message.charCodeAt(i) + shift);
        }
        else {
            chipher2 += String.fromCharCode(message.charCodeAt(i) + shift);
        }
    }

    message.replace(/[a-z]/gi, m => {
        const c = m < "a" ? 65 : 97;
        return String.fromCharCode((m.charCodeAt(0) - c + shift) % 26 + c)
      });
    // (97+(x.charCodeAt()-97+k) % 26

}

caesarCipher("middle-Outz", 2);

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5);

caesarCipher("A friend in need is a friend indeed", 20);




// An English text needs to be encrypted using Edabit’s encryption scheme. First, the spaces are removed from the text. Let L be the length of this text. 
// Then, characters are written into a grid, whose rows and columns have the following constraints:

// For example, the sentence "if man was meant to stay on the ground god would have given us roots", after removing spaces, is 54 characters long. The square 
// root of 54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.

// ifmanwas
// meanttos
// tayonthe
// groundgo
// dwouldha
// vegivenu
// sroots
// Ensure that rows x column >= L
// If multiple grids satisfy the above conditions, choose the one with the minimum area.
// rows x columns >= L
// The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and 
// so on. For example, the encoded message for the above rectangle is:

// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
// Examples
// encryption(“haveaniceday”) ➞ “hae and via ecy”

// have
// anic
// eday

// encryption(“feedthedog”) ➞ “fto ehg ee dd”

// encryption(“chillout”) ➞ “clu hlt io”

// encryption(“A Fool and His Money Are Soon Parted.”) ➞ "Anoea FdnSr oHeot oiyoe lsAnd aMrP."

// Notes
// Ensure capitalization remains the same in encrypted text.
// Do not remove special characters.



function encryption(str) {
    var trim_str = str.trim().trimStart().trimEnd();

    var col_num = Math.floor(Math.sqrt(Number(trim_str.length)));

    var row_num = col_num + 1;
    var iter = 0;
    let encrypt_str = "";
    var grid = [];
    for(var i = 0, start = 0; i < row_num; i++) {    
        for(var j = 0; j < col_num; j++) {
            if(!(trim_str[iter] === undefined)) {
                encrypt_str += trim_str[iter];
                iter += row_num;
            }
            break
        }
        grid.push(encrypt_str);
        iter = ++i;
    }

    for(var k = 0; k < col_num; k++) {

        encrypt_str += trim_str[k];
        
        k += col_num;
        

        grid.push(encrypt_str)
    }


    for(var j = 0; j < col_num; j++) {
        for(var k = 0, start = 0; k < row_num; k++) {
            grid.push(trim_str.substring(start, col_num))
            start += col_num;
            col_num += col_num;
        }
        
    }
}




// encryption("feedthedog");

// Create a function that takes an Arabic number and converts it into a Roman number.


// Notes
// All roman numerals should be returned as uppercase.
// The largest number that can be represented in this notation is 3,999.

function convertToRoman(num) {
    const roman_map = {1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X"}
    const roman_map2 = {50:"L", 100:"C", 500:"D", 1000:"M"}
    
    var roman_numerial = [];
    for(var i = 0; i < Math.trunc((num/10)); i++) {
        if(Math.trunc((num/10)) < 5) {
            roman_numerial.push(roman_map[i*10])
        }
    }
    for(var i = 0; i < (num/10) % 1; i++ ) {
        roman_numerial.push(roman_map[i*10])
    }
    
    return roman_numerial.join("")
}


function convertToRoman(num) {
    var roman_map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman_numerial = '',i;
    for (i in roman_map) {
      while (num >= roman_map[i]) {
        roman_numerial += i;
        num -= roman_map[i];
      }
    }
    return roman_numerial;
  }

convertToRoman(5);

convertToRoman(2);

convertToRoman(12);

convertToRoman(16);


// Given an incomplete palindrome as a string, return the minimum letters needed to be added on to the end to make the string a palindrome.

function minPalindromeSteps(s) {
    var i = 0; var s =s.split(""); var p = []; var n = ""; s.forEach(element => { p.unshift(element)});
    do {p.splice(i, 0, s[i]);s.reverse().splice(i, 0, p[i]);i++;s.reverse(); n+=s[i]; console.log(`Add ${i} letters: \"${n}\" to make ${p.join()}`);} while(s==p); 
} 

minPalindromeSteps("race");
// Add 3 letters: "car" to make "racecar"

minPalindromeSteps("mada");
// Add 1 letter: "m" to make "madam"

minPalindromeSteps("mirror");
// Add 3 letters: "rim" to make "mirrorrim"