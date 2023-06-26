// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
const sevenBoom1 = arr => {return arr.join().includes(7) ? "Boom!" : "there is no 7 in the array"}

const sevenBoom2 = arr => {return arr.join().match(/7/g) ? "Boom!" : "there is no 7 in the array" }

const sevenBoom3 = arr => {return /7/.test(arr.toString()) ? "Boom!" : "there is no 7 in the array" }

sevenBoom1([1, 2, 3, 4, 5, 6, 7]);
// 7 contains the number seven.

sevenBoom1([8, 6, 33, 100]);
// None of the items contain 7 within them.

sevenBoom3([2, 55, 60, 97, 86]);
// 97 contains the number seven.


// Tower of Hanoi
// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

// Tower of Hanoi

// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

function towerHanoi(d) {
    let tower1_s  =  [];
    (function () {for(let i = 0; i < d;) {tower1_s.push(i += 1)} return tower1_s;})();

    // const tower1_s = d => {let tower1_s = []; for(let i = 0; i < d;) {tower1_s.push(i += 1)} return tower1_s;}



    let tower2_a  = [];
    let tower3_d = [];

    // tower1_s.forEach(element => { if(tower1_s.shift() === 1) {tower3_d.push(element)} else {tower2_a.push(element); tower1_s.push(tower1_s.shift()); tower3_d.push(tower2_a.shift())}});

    // while(tower3_d.length != d) {if(tower1_s[0] === 1) {tower3_d.unshift(tower1_s?.shift())} else {tower2_a.unshift(tower1_s?.shift()); tower2_a.unshift(tower3_d?.shift()); tower2_a.unshift(tower1_s?.shift()) }}

    // while(tower3_d.length != d) {
    //  if(tower3_d.length === 0) {tower3_d.unshift(tower1_s.shift());}
    //  else if(tower1_s[0] <= tower3_d[0] && (tower2_a.length >= 0)) {tower3_d.unshift(tower1_s.shift());} 
    //  else if (tower1_s[0] >= tower3_d[0] && (tower2_a.length <= 0)) {tower2_a.unshift(tower1_s.shift());} 
    //  else {tower2_a.unshift(tower3_d.shift());}}


     

    return Math.pow(2, d) - 1;
   
}

towerHanoi(3);

towerHanoi(5);

towerHanoi(0);


// solve tower of hanoi puzzle 
function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"\n");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
  
    
    var N = 3;
      
  
    towerOfHanoi(N, 'A', 'C', 'B');



// In mathematics, primorial, denoted by “#”, is a function from natural numbers to natural numbers similar to the factorial function, but rather than successively multiplying positive integers, the function only multiplies prime numbers.

// Create a function that takes an integer n and returns its primorial.


primorial(10);
// First prime number = 2

primorial(2);
// Product of first two prime numbers = 2*3 = 6

primorial(6);


function primorial(n) {
    let prime = [1, 2];
    (function () {for(var i = 2;i < n; i++) {if(i % 2 === 1) {prime.push(i)}} return prime;})();
   
    return prime.reduce((previousValue, currentValue, currentIndex, array) => {return previousValue *= array[currentIndex];})
}

var prime_check = n =>  {let prime = []; for(var i = 1;i < n; i++) {if((6 * i + 1) % 6 == 1) {prime.push(i); var result = (6 * i + 1)}} return prime;}

prime_check(10);


// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]


// Notes
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last

function countBoomerangs1(arr) {
    return arr.filter((element_predicate, index, array) => {var offset = index+2; return array[index]===array[offset] && !(array[index]===array[index+1])}).length
}

function countBoomerangs2(arr) {
    return arr.reduce((previousValue, currentValue, currentIndex, array) => {let arrSlice = array.slice(currentIndex,currentIndex+3); return arrSlice[0] === arrSlice[2] && (arrSlice[0] != arrSlice[1]);}, 0)
}


countBoomerangs1([9, 5, 9, 5, 1, 1, 1]);

countBoomerangs2([5, 6, 6, 7, 6, 3, 9]);

countBoomerangs1([4, 4, 4, 9, 9, 9, 9]);


// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

const oddishOrEvenish = n => {return n.toString().split("").reduce((previousValue, currentValue, currentIndex, array) => {previousValue = parseInt(previousValue, 10); currentValue =+currentValue; return previousValue += Number(currentValue);}) % 2 === 0 ? "Evenish" : "Oddish"}

const oddishOrEvenish2 = n => {return Array.from(String(n), Number).reduce((previousValue, currentValue, currentIndex, array) => {return previousValue += currentValue}) % 2 === 0 ? "Evenish" : "Oddish";}

const oddishOrEvenish3 = n => {return `${n}`.split("").map(Number).reduce((previousValue, currentValue, currentIndex, array) => {return previousValue += currentValue}) % 2 === 0 ? "Evenish" : "Oddish";}


oddishOrEvenish(43)
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish2(373);
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish3(4433);
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0


// Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(f, s) {return Math.abs(s - f) / (24 * 60 * 60 * 1000)}



getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
);


getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
);
// Dates may not all be in the same month/year.


getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
);


// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.


const getLength =  a => {a.forEach((element_value, index, array) => {if(element_value.length >= 2) {element_value.flat(element_value.length)}}) }

// const getLength =  a => {return a.flat(a.length) }

// getLength([1, [2, 3]]);

getLength([1, [2, [3, 4]]]);

getLength([1, [2, [3, [4, [5, 6]]]]]);

getLength([1, [2], 1, [2], 1]);

// Tap code is a way to communicate messages via a series of taps (or knocks) for each letter in the message. Letters are arranged in a 5x5 polybius square, with the letter "K" being moved to the space with "C".

//    1  2  3  4  5
// 1  A  B C\K D  E
// 2  F  G  H  I  J
// 3  L  M  N  O  P
// 4  Q  R  S  T  U
// 5  V  W  X  Y  Z
// Each letter is translated by tapping out the row and column number that the letter appears in, leaving a short pause in-between. If we use "." for each tap, and a single space to denote the pause:

// text = "break"

// "B" = (1, 2) = ". .."
// "R" = (4, 2) = ".... .."
// "E" = (1, 5) = ". ....."
// "A" = (1, 1) = ". ."
// "K" = (1, 3) = ". ..."
// Another space is added between the groups of taps for each letter to give the final code:

// "break" = ". .. .... .. . ..... . . . ..."
// Write a function that returns the tap code if given a word, or returns the translated word (in lower case) if given the tap code. When translating from tap-code, default to the letter "c" if the tap-code ". ..." is found.

// Examples
// tapCode("break") ➞ ". .. .... .. . ..... . . . ..."

// tapCode(".... ... ... ..... . ..... ... ... .... ....") ➞ "spent"
// Notes
// For more information on tap code, please see the resources section. The code was widely used in WW2 as a way for prisoners to communicate.

function tapCode(s) {

    const tableTable = {a:[1,1], b:[1,2], c:[1,3], d:[1,4], e:[1,5], f:[2,1], g:[2,2], h:[2,3], i:[2,4], j:[2,5], k:[1,3], l:[3,1], m:[3,2], n:[3,3],o:[3,4],
    p:[3,5], q:[4,1], r:[4,2], s:[4,3], t:[4,4], u:[4,5], v:[5,1], w:[5,2], x:[5,3], y:[5,4], z:[5,5]}

    // const tap_table = l => {l.split().map((element_value, index, array) =>{return [element_value.toLowerCase().charCodeAt(0)-97, element_value.toLowerCase().charCodeAt(0)-96];})}

    // for(var i = 1; i < 5; i++) 

    // s.split("").forEach(element => {let tap_code = "";  for(var i = 0; i < element.toLowerCase().charCodeAt(0)-97; i++){tap_code +="."}; tap_code +=" ";
    // for(var i = 0; i < element.toLowerCase().charCodeAt(0)-96; i++){tap_code +="."}; tap_code += " ";
        
    // });
 

    let tap_code = "";
   
    s.split("").forEach(element => { for(var i = 0; i < tableTable[element][0]; i++) {tap_code +="."}; tap_code +=" ";
    for(var i = 0; i < tableTable[element][1]; i++) {tap_code +="."}; tap_code +=" ";});
        
    console.log(tap_code);
}

tapCode("break");

tapCode("spent");


// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

function doesBrickFit(h, w, d, c, b) { return h <= c && w <= b ? true : false;}

doesBrickFit(1, 1, 1, 1, 1);

doesBrickFit(1, 2, 1, 1, 1);

doesBrickFit(1, 2, 2, 1, 1);

// Notes
// You can turn the brick with any side towards the hole.
// We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
// You can't put a brick in at a non-orthogonal angle.


// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.




const numInStr = (a) => {let numStr = ["1","2","3","4","5","6","7","8","9","0"]; let newArr = new Set([]); a.filter((p,i,a) => {for (const iterator of p) {numStr.forEach(element => {if(iterator == element){newArr.add(p)}});} {
    
}}); let arr = new Array(newArr); console.log(arr);}

numInStr(["11a", "a", "2b", "b"]);

numInStr(["abc", "abc10"]);

numInStr(["abc", "ab10c", "a10bc", "bcd"]);

numInStr(["this is a test", "test1"]);
// Notes
// The strings can contain white spaces or any type of characters.
// Bonus: Try solving this without RegEx.
 

// Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

const combinations = (...a) => {let result=0; let filterNum = a.filter((v,i,a) => {return v > 0}); return filterNum.reduce((p,c,i,a) => {return p*=c});}

combinations(0, 2, 3);

combinations(3, 7, 4);

combinations(2, 3, 4, 5);

// Notes
// Don't overthink this one.
// Input may include the number zero.


// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

const isPositiveDominant = (a) => {let arrSet = new Set(a); return Array.from(arrSet).map(element => {return Math.sign(element);}).reduce((p,c,i,a) => {return p+=c;}) == 1  ? true : false;} //signedArr.reduce((p,c,i,a) => {return p+=c;})  }

isPositiveDominant([1, 1, 1, 1, -3, -4]);
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]);

isPositiveDominant([5, 0]);

isPositiveDominant([0, -4, -1]);

const distinct = (value, index, self) => {return self.indexOf(value) === index;}

let years = [2017, 2018, 2018, 2017, 2019, 2019]

const uniqueDistinct = years => {return years.filter(distinct);}

uniqueDistinct(years)



// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a 
// price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

const getTotalPrice = (o) => {return o.map((v,i,a) => {return v.quantity * v.price}).reduce((p,v,i,a) => {return p += v;})}

// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]);

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]);

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]);

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]);

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]);


// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer 
// (mph). No rounding is necessary.


// Notes
// The solution is not dividing the sum of the speeds by 2.
// Check the Resources tab if your stuck.

aveSpd(18, 20, 60);

aveSpd(30, 10, 30);

aveSpd(30, 8, 24);

function aveSpd(t, u, d) {
    // downhill rate is three times the uphill rate
    let downhillTime = t / 3;
    let uphillDistance = t * u;
    let downhillDistance = downhillTime * d;
    let result = (u + d) / (downhillTime + t);
} 


// Write a function that counts how many concentric layers a rug has.


countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
]);

countLayers2([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
]);

countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]);

// Notes
// Multiple layers can share the same component so count them separately (example #2).
// Layers will be horizontally and vertically symmetric.
// There will be at least one layer for each rug.

function countLayers(a) {let aSet = new Set(a); return aSet.size;}

function countLayers2(a) {let count = 1; for(let i = 0, j = a.length-1; i < j; i++, j--) {if(a[i] == a[j]) {count++}}}