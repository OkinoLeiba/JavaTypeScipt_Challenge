
var b = 0, h = 0;

function areaTriangle(b, h) {

    var i = 0;
    while(i < 100) {
        if(true) {
    let result = (b * h) / 2;
    i++;
    b *= 2;
    h **= 2;
        console.log(result);
        console.count();
        console.clear;
        }
    }
}


areaTriangle (2, 2);

var at = areaTriangle (10, 8); // expression to assign to variable, blocked scoped but/or if declared with "let" could be used to pass data to other function, DOM, objet, API, etc.

areaTriangle (19, 3)

// Create a function that takes the age in years and returns the age in days.

let ad = function ageDays(age) {
    if(age < 0) {
        console.error("No zero days, age cannot be a negative number!") // experiment with exceptions later, console for debug mode
    }
    else {
        var days = age * 365;
        console.log("Age in Years to Data " + days);}
}


ad (10);

ad (40);

ad (-1);



// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// syntax, logic, runtime: memory, type, range, reference, eval**

// function cubes(a) {
// 	retunr a ** 3
    
// }

function cubes(a) {
	// retunr a ** 3
    return a ** 3;
}


cubes(5);

cubes(Infinity);

cubes(16);



// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(the_array) {
    console.log(the_array[0]);
    for(var num in the_array) {
        var result = Number(num) >> 2;
        console.log(result);
    }
} 

getFirstValue([1, 2, 3]);

getFirstValue([80, 5, 100]);

getFirstValue([-500, 0, 50]);



// Create a function that takes voltage and current and returns the calculated power.

const init = (function circuitPower() {
    var current = 20; 
    var voltage = 10;
    var resistance = voltage / current;
    voltage = current * resistance;
    current = voltage / resistance;



    var power = current * voltage;
    return power;
})();

console.log(init);
// circuitPower(230, 10);

// circuitPower(110, 3);

// circuitPower(480, 20);




// Write a function that converts hours into seconds.

const seconds = (function howManySeconds() {
        var hour = 10;
        var seconds = hour * 360;
        var d = Date.now();
        let date =  new Date();
        var ms = date.getMilliseconds();
    

        return seconds;
        
})();

console.log(seconds);

//  let x = howManySeconds(2);

// howManySeconds(10);

// howManySeconds(24);


// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

var s3_max = (s1, s2) => {
    // var s1 = 8;
    // var s2 = 10;
    var s3_max = (s1 + s2) - 1;
    console.log(s3_max);
};


s3_max(8, 10);

// maxThirdSideTriangle(8, 10);

// maxThirdSideTriangle(5, 7);

// maxThirdSideTriangle(9, 2);


// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

var remainder = function (a, b) {
    return result = a % b;
}


var result = remainder(1, 3);

var result = remainder(3, 4);

var result = remainder(-9, 45);

var result = remainder(5, 5);



// Create a function that takes length and width and finds the perimeter of a rectangle.

const findPerimeter = new Function('a', 'b', " return (a*2) + (b*2)");


findPerimeter(6, 7);

findPerimeter(20, 10);

findPerimeter(2, 9);




// Write a function that returns the string "something" joined with a space " " and the given argument a.


giveMeSomething("is better than nothing");

giveMeSomething("Bob Jane");

giveMeSomething("something");


function giveMeSomething (s) {
    const some = "something";
    return some + " " + s;

}

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// function squaed(b) {
// 	return a * a
// }

function squared(a) {
	return a * a;
}


squared(5);

squared(9);

squared(100);



// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(x){
    if (x <= 0) return true;
    else console.log(false);
    console.info(lessThanOrEqualToZero);
    var other_buul = (x <= 0) ? true : false;
}


var buul = lessThanOrEqualToZero(5);

var buul = lessThanOrEqualToZero(0);

var buul = lessThanOrEqualToZero(-2);




// Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function invoke(n){
    var counter = 0;
    while (counter <= n) {
        if(counter <= n && !(n == 3)) {
            sumPolygon();
            function sumPolygon() {
                var sum = (n - 2) * 180;
                return sum;  
            }
        }
        else {
        areaTriangle(2, 2);
        }

        n--;
    }
    

}


// invoke(3);

invoke(4);

invoke(6);



// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
var score = function points(twopoints, threepoints) {
    const two = 2;
    const three = 3;

    return result = (twopoints * two) + (threepoints * three);
}

score(1, 1);

score(7, 5);

score(38, 8);



// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(name) {
    console.time("timer")
    const text = `Edabit`;

    let new_string = name+text;

    console.log(name.concat(text));
    console.log(name+text);
    

    
    console.log(new_string.toLocaleUpperCase());
    console.log(new_string.charAt(5));
    console.log(new_string.charCodeAt(5));
    console.timeEnd("timer");

    return new_string.substring(4, new_string.length);
}
 
nameString("Mubashir");

nameString("Matt");

nameString("javaScript");



// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

(function ()  {
    let a = 22;
    let b = 15;
    var sum = a + b;
    if(sum < 100) {
        

        lessThan100(22, 15);
        // 22 + 15 = 37

        lessThan100(83, 34);
        // 83 + 34 = 117

        lessThan100(3, 77);

        return true;
    }
    else {
        return false;
    }
})();

function lessThan100(a, b) {
    var sum = a + b;
    if(sum < 100) {
        return true;
    }
    else {
        return false;
    }
}

lessThan100(22, 15);
// 22 + 15 = 37

lessThan100(83, 34);
// 83 + 34 = 117

lessThan100(3, 77);


// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// function printArray(number) {
//   var newArray = [];

//   for(var i = 1; i <= number;) {
//     newArray.push(i);
//   }

//   return newArray;
// }

function printArray(number) {
  var  newArray = new Array();

  for(var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

printArray(1);

printArray(3);

printArray(6);



// Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"

// function swap(a, b) {
// 	b = a
// 	a = b
// 	return [a, b]
// }

function swap(a, b) {
    console.time("timekeeper");
	let temp = a;
	a = b;
    b = temp;

    console.log([a, b] = [b, a]);

    const swappy = {a:a, b:b};
    a = swappy.b;
    b = swappy.a;

    console.timeEnd("timekeeper");
	return [a, b];
    
}

swap(100, 200);

swap(44, 33);

swap(21, 12);



// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function returnFunc(result) {
    return result;
}

function animals(c, w, p) {
    const chickens = 2;
    const cows = 4;
    const pigs = 4;

    result = (c * chickens ) + (w * cows) + (p * pigs)

    return returnFunc(result);
}

animals(2, 3, 5);

animals(1, 2, 3);

animals(5, 2, 8);


// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// Make a function using the && operator.

function and(a , b) {
    let bool = a && b;

    if(bool) {
    // var c = setTimeout(and.call(swap(5, 6)), 80000000);
    return swap(5, 6);
    }
    else {
        return;
    }
    
}

and(true, false);

and(true, true);

and(false, true);

and(false, false);



// Create a function that returns true when num1 is equal to num2; otherwise return false.
let isSameNum = function (a, b){

    if(Object.is(b, a)) {
        return true;
    }
    else {
        return false;
    }


    if(a === b) {
        return true;
    }
    else {
        return false;
    }

}

isSameNum(4, 8);

isSameNum(2, 2);

isSameNum(2, "2");



// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

const footballPoints = function (w, d, l) {
    const wins = 3;
    const draws = 1;
    const losses = 0;

    var points = (wins * w) + (draws * d) + (losses * l);
    return points;

}



let points = footballPoints(3, 4, 2);

footballPoints(5, 0, 2);

footballPoints(0, 0, 1);





// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(h, s) {
    const h_s = 3600;
    const m_s = 60;

    (h ** m_s) + (s * m_s)

    return (h * h_s) + (s * m_s);
}


convert(1, 3);

convert(2, 0);

convert(0, 0);


// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.


isSeven(4);

isSeven(9);

isSeven(7);

// function isSeven(x) {
// 	return x="7"?false:true:false;
// }


function isSeven(x) {
	return x=="7" ?  true:false;
}


// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// let makesTen = new function("a, b, return a == 10 || b == 10 ? true:false a + b == 10 ? true:false")

const makesTens = (a, b) => {return a == 10 || b == 10 || (a + b == 10) ? true:a <= b ? false:true}

makesTens(9, 10);

makesTens(9, 9);

makesTens(1, 9);



// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
const profitableGamble = function (prob, prize, pay) {
    if((prob * prize) > pay) {
        return true;
    }
    else {
        return false;
    }

}


profitableGamble(0.2, 50, 9);
// ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.


profitableGamble(0.2, 50, 9);

profitableGamble(0.9, 1, 2);

profitableGamble(0.9, 3, 2);



// Create a function that takes a boolean variable flag and returns it as a string.
const boolToString = (flag) => { 
    const value =  new String(flag);
    const value2 = String(flag);
    const value3 = flag.toString();
    return value;

}


boolToString(true);

boolToString(false);



// 4. Calculate the sum of numbers within an array



let sumOfNumbers = (function () {
    let sum = 0;
    var array1 = [1, 2, 5, 5, 6, 0];
    var array2 = [1, -2, 5, -5, 6, 0];
    var array3 = [1.2, 2.0, 5, 5.5, 6, 0.8]; 
    var array4 = [[1, 2, 5, 5, 6, 0],[1, 2, 5, 5, 6, 0]];


    array1.forEach(sumTheNumbers);
    array2.forEach(sumTheNumbers);
    array3.forEach(sumTheNumbers);



    function sumTheNumbers(array) {
        sum += array;
    }

    
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;

    for(var i = 0; i < array1.length; i++) {
        sum1 = sum1 + array1[i];
    }

    console?.log("Sum 1 is: " + sum1);

    for(var i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }

    console?.log("Sum 2 is: " + sum2);

    for(var i = 0; i < array1.length; i++) {
        sum3 += array3[i];
    }


    for(var i = 5; i < array4[0].length-1; i++) {
        for(var j = 0; j < array4[1].length-1; j++) {
            if(i <=  array4[0].length-1) {
             sum4 += array4[i][j];
            }
        }
    }

    console?.log("Sum 3 is: " + sum3);
    if (!isNaN(sum)) {
    return "The definition of success is that is sucks less";
    }
})();

console.log(sumOfNumbers);


// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here


let arrowFunc = p => console.log(p)

arrowFunc(3);

arrowFunc("3");

arrowFunc(true);



// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

let zframes = (a, b) => {
    const frame = 60;
    var c = (a * frame) * b;
    return c;
}

zframes(1, 1);

zframes(10, 1);

zframes(10, 25);




// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
function calculator(stringer) {
    console.log(eval(stringer));
    console.log(Function(stringer));
    console.log(Function("return" + stringer));
}

calculator("23+4");

calculator("45-15");

calculator("13+2-5*2");

calculator("49/7*2-3");



// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// function greeting(name) {
//     return "Hello, " + name + "!";
//     if(name == "Mubashir") {
//       return "Hello, my Love!";
//     }
//   }

  function greeting(name) {
    
    if(name == "Mubashir") {
      return "Hello, my Love!";
    }
    name == "Mubashir"  ?  console.log("Hello, my Love!" ) : console.log("Hello, " + name + "!");

    Promise.resolve().then(() => name == "Mubashir" ?  console.log("Hello, my Love!" ) : console.log("Hello, " + name + "!"));

    return "Hello, " + name + "!";


   
  }


greeting("Matt");

greeting("Helen");

greeting("Mubashir");



// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

const tenner = function makesTen(a, b) {
    if((a == 10 || b == 10) || (a + b) == 10){
        return Boolean(1);
    }
    else {
        return Boolean(NaN);
    }

}


var tenTen = tenner(9, 10);

var tenTen = tenner(9, 9);

var tenTen = tenner(1, 9);



// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

const calculateFuel = Function("n", "if(n < 10) {return 100;} else { return n * 10;}");


calculateFuel(15);

calculateFuel(23.5);

calculateFuel(3);


// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// function maxNum(n1;n2) {
// 	if (n1>n2) {
// 	  return n2
// 	}
//   else if {
// 	return n1
//   }
// }

function maxNum(n1, n2) {
    
	if (n1 > n2) {
	  return n1;
	}
  else {
	return n2;
  }
//   Promise.resolve(console.log(maxNum(n1 , n2)));
 
}

maxNum(3, 7)

setTimeout(maxNum, 5000000)

maxNum(1000, 400);


// Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) {
    var list1 = new Array(num1, num2);

    var list2 = [num1, num2];

    var list3 = [];
    list3.push(num1, num2);

    let lists = {list1, list2, list3}


    return {list1, list2, list3};
}

// makePair.then({
//     function (lists) {return lists;}
// });


let {list1, list2, list3} = makePair(1, 2);

makePair(51, 21);

makePair(512124, 215);


// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function* comp (a, b) {
    if(a.length == b.length) {
        yield true;
    }
    else if(a.length != b.length) {
        yield false;
    }

    yield a.length;
    yield b.length;
}

let genFunc = comp("AB", "CD");

console.log(genFunc.next().value)
console.log(genFunc.next().done)
console.log(genFunc.next().value)
console.log(genFunc.next().done)

genFunc = comp("ABC", "DE");

comp("hello", "edabit");

const genFunc2 = comp("hello", "edabit");
console.log(genFunc2.next());




// Create a function that returns true if a string is empty and false otherwise.

const isEmpty = function* (str) {
    if(!str) {   //truthy or falsey
        yield true;
    }
    else {
        yield false;
    }

    if(str === " ") {
        yield true
    }
    else {
        yield false
    }

    if(str.length = 0 || str == " ") {
        yield true
    }
    else {
        yield false
    }

    if(!Boolean(str)) {
        yield true
    }
    else {
        yield false
    }
}

var gen = isEmpty(" ")
gen.return()

var gen = isEmpty("");
console.log(gen.return());

isEmpty(" ");

var gen = isEmpty("a");
console.log(gen.next().value);



// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function* divisible(num) {
    if(num % 100 == 0) {
        yield true;
    }
    else {
        yield false;
    }

}

divisible(1);

divisible(1000);

divisible(100);





"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); 
    // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});

obj;


// Write a function that returns the length of a string. Make your function recursive.


// "use strict"

let str_obj = function (str) {
    s: str;

};

Object.defineProperty(str_obj, "prop_key", {
    get: () => {
        console.log(this.s, typeof this.s, this); 
        return function len() {
            if(this.s) {
            var str = this.s;
            console.log(str.length);
        }

        };
    },
});


str_obj("apple");


function str_length(str) {
    let i = 0;
    let count = 0;
    
    function inner_trampoline(str_splice) {
    if(String(str[i]) && !str.isEmpty()) {
        
        count += 1;
        i += 1;
        return inner_trampoline(str.slice(i, str.length));
    }
}
    var count2 = 0;
    for(var letter of str) {
        count2 += 1;
    }


}

// reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue)

// const str_length2 = (str) => {if(str) {var count += 1; }}

str_length("apple");

str_length("make");

str_length("a");

str_length("");





// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

const dividesEvenly = new Function("a", "b", "if(a % b === 0) {console.log(true)} else {console.log(false)}\nif(Number.isInteger(a / b)) {console.log(true)} else {console.log(false)}\nif(Math.floor(a/b) == (a/b)) {console.log(true)} else {console.log(false)}");


dividesEvenly(98, 7);
// 98/7 = 14

dividesEvenly(85, 4);
// 85/4 = 21.25



// 5. Create a function that reverses an array

function revArray() {
    var array1 = [1, 2, 5, 5, 6, 0];
    var array2 = [1, -2, 5, -5, 6, 0];
    var array3 = [1.2, 2.0, 5, 5.5, 6, 0.8]; 
    var array4 = [[1, 2, 5, 5, 6, 0],[1, 2, 5, 5, 6, 0]];

    var the_rev = []
    for(var i = (array1.length-1); i > 0; i--) {
        the_rev.push(array1[i])
    }
}


const funcRevArray = revArray();



// Create a function that takes a string and returns it as an integer.

function stringInt(str) {
    var str_convert = Number(str);

    var str_convert2 = Number.parseInt(str);

    return str_convert;
}


stringInt("6");

stringInt("1000");

stringInt("12");



// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.


areaRect(3, 4);

areaRect(10, 11);

areaRect(-1, 5);

areaRect(0, 2);



function areaRect(h, w) {

    var rec_result = (h**2) + (w**2);
    console.log((rec_result) => rec_result < 0);
    console.log(Array.prototype.some((rec_result) => rec_result < 0));
    return rec_result;
}


// In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

// In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

// Keep your code clean and readable.
// While not violating the first principle: get rid of everything superfluous.
// In order to achieve this you should:

// Deepen your knowledge of logics.
// Deepen your understanding of the particular language you're coding with.
// I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.

// Goal
// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible.

// function isEven(n) {
// 	if n % 2 === 0 {
// 		return true
// 	}
// 	else if n % 2 === 1 {
// 		return false
// 	}
// }



function isEven(n) {
    arguments[0] = 12; // always even always true
    return n % 2 === 0;
}



isEven(3);

isEven(6);

isEven(19);

isEven(-2);



// Given two strings, firstName and lastName, return a single string in the format "last, first".

const concatName1 =  (first_name, last_name) => {return last_name + ", " + first_name;}

const concatName2 = (last_name, first_name) => {return String.prototype.concat(last_name, ", ", first_name)}

// @ts-ignore
const concatName3 = (last_name, first_name) => {return Array.prototype.join(last_name, first_name)} //  last_name.join(first_name)

concatName1("First", "Last");

concatName2("John", "Doe");

// concatName3("Mary", "Jane");



// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.


has_bugs(true);

has_bugs(false);


// function has_bugs(buggy_code) {
// 	if (buggyCode) {
// 		return 'sad days'
// 	} else if {
// 		return 'it's a good day'
// 	}
// }


function has_bugs(buggy_code) {
	if (buggy_code) {
		return 'sad days';
	} else {
		return 'it\'s a good day';
	}  
}



// Create a function that evaluates an equation.

async function* eq(evaluate) {
    yield eval(evaluate);
    yield eval?.(evaluate);
    let the_promise = new Promise(yield `(${evaluate})`);
    return the_promise;
}

eq().next()

// Promise.resolve.apply(eq());

// let thePromise = new Promise()

// eq().then(function eq_true() {return true;}, function eq_false() {return false;});


const genFunc3 = eq("1+2");
console.log(genFunc3.next());
console.log(genFunc3.next());
console.log(genFunc3.next());

eq("1+2");

eq("6/(9-7)");

eq("3+2-4");



// Create a function that takes an angle in radians and returns the corresponding angle in degrees.


radiansToDegrees(1); 
// 57.29577951308232

radiansToDegrees(20); 
// 1145.9155902616465

radiansToDegrees(50); 
//2864.7889756541163



function radiansToDegrees(rad) {

    arguments[0] = rad; // arguments remains in scope and static throughout the execution of program
    var rad_result = 180 / Math.PI;

}




// Create a function that takes an equation (e.g. "1+1"), and returns the answer.

const equation = new Function("equation", "var equ_result = (equation) => eval(new String(equation)); return equ_result;");


equation("1+1");

equation("7*4-2");

equation("1+1+1+1+1");


// 6. Sort an array from lowest to highest


function sorrArray(arr) {
    var sort_arr = [];
    for(var ele of arr) {
        if(ele < temp) {
            sort_arr.push(ele);
        }
        var temp = ele;
    }

    var sort_arr2 = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]) {
            sort_arr2.push(arr[i]);
        }

    }
}


var arr = [1, 2, 5, 5, 6, 0];
var arr2 = [1, -2, 5, -5, 6, 0];
var arr3 = [1.2, 2.0, 5, 5.5, 6, 0.8]; 
var arr4 = [[1, 2, 5, 5, 6, 0],[1, 2, 5, 5, 6, 0]];


sorrArray(arr)



// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

function drop(arr_drop, index) {
    var new_arr3 = arr_drop.splice(index);
    
    for(var i = 0; i <= index; i++) {
        // arr_drop[0] = " ";
        var new_arr = arr_drop.shift();
        var new_arr2 = arr_drop.pop();
    }
}


drop([1, 2, 3], 1);

drop([1, 2, 3], 2);

drop([1, 2, 3], 5);

drop([1, 2, 3], 0);





// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

const getVoteCount = (votes) => {
    var vote_count = votes.upvotes - votes.downvotes;
    console.log(vote_count);

}

getVoteCount({ upvotes: 13, downvotes: 0 });

getVoteCount({ upvotes: 2, downvotes: 33 });

getVoteCount({ upvotes: 132, downvotes: 132 });




// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(n) {
   
    var neg = -n;
    var neg2 = n - (n**2);
    return neg;

    
}


returnNegative(4);

returnNegative(15);

returnNegative(-4);

returnNegative(0);




// Write a function to reverse an array.
const reverse = (function () {
    var arr1 = [1, 2, 3, 4];
    var arr2 = [9, 9, 2, 3, 4];
    var arr3 = []

    var NewType = Object

    let array_object_meta = {
        len: 5,
        "id": "array_object_meta",
        name: "data_structure-name",
        arrayType: ["a", 1, arr2],
        NewType: [[Symbol]], 
        3:9

    }

    var arr = [arr1, arr2, arr3];

    var i = 0
    var arr_results = []
    while(i < arr.length-1) {
        arr_results.push(arr[i].reverse());
        i++;
    }
    var arr_results1 = Array.prototype.reverse.call(arr1);
    var arr_results_meta = Array.prototype.reverse.call(array_object_meta);

    var arr_results3 = [];
    arr_results3.push(arr.forEach(arr => { Array.prototype.reverse()   
    })); // generates nothing 

})();


// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

const acceptIntoMovie = function (age, isSupervised ) {
    if((age >= 15) || isSupervised) {
        return true;
    }
    else {
        return false;
    }
}


acceptIntoMovie(14, true);

acceptIntoMovie(14, false);

acceptIntoMovie(16, false);




// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// function incrementItems(arr) {
// 	for (let i = 0; i < array.length; i++)
// 		arr[i] === arr[i] + 1
// 	return array
// }

function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i] = arr[i] + 1;
	return arr;
}

let incrementItem = arr.map((arr) => arr + 1)

incrementItems([0, 1, 2, 3]);

incrementItems([2, 4, 6, 8]);

incrementItems([-1, -2, -3, -4]);



// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

const shouldServeDrinks = (age1, onBreak) => {if((age1 > 18) && onBreak) console.log("Serve Drinks");}

const shouldServeDrinks2 = (age1, onBreak) => ((age1 > 18) && onBreak) ? console.log("You Want Bread, No Drinks For You"):console.log("You Still Want Drink, No Drinks For You");

const shouldServeDrinks3 = (age1, onBreak) => ((age1 > 18) && onBreak) ? null : undefined ?? console.log("You Want Bread, No Drinks For You");

shouldServeDrinks(17, true);

shouldServeDrinks2(19, false);

shouldServeDrinks3(30, true);



// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

const futurePeople = new Function("population", "births", "for(var i = 0; i < 12; i++)\n\tfor(var j = 0; j < 30; j++)\n\t\t{var fut_result = population + (births*i*j);\n\t\t\treturn fut_result;}");

const _futurePeople = new Function("population", "births", "return fut_result = population + (births*12*30)")

futurePeople(256, 2);

_futurePeople(3248, 6);

_futurePeople(5240, 3);



// Write a template string according to the following example:


// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
// Tips
// A template string is a string that uses a Dollar sign and curly braces inside backticks ${} as a placeholder that can then be formatted:

// const name = John;
// `hello, my name is ${name}.` ➞ "hello, my name is John."
// You can put an expression inside the curly braces :

// const age = 12;
// `Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."


const stringTemplate = (function format() {
    // the result string must give: "Their names were: a, b and c."
    const a = "John";
    const b = "Joe";
    const c = "Jack";
    const template = `Say My Name, ${a}, Say My Name, ${b}, If No One is Around You, ${b}`;
    return template
    })();


// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write five adder functions:

// add2(x) should return 2 + x.
// add3(x) should return 3 + x.
// add5(x) should return 5 + x.
// add7(x) should return 7 + x.
// add11(x) should return 11 + x.
// Tips
// Functions that consist only of a return can be written as a one-liner with an arrow function.





function add2(x) {
	return x + 2;
}

function add3(x) {
	return x + 3;
}

function add5(x) {
	return x + 5;
}

function add7(x) {
	return x + 7;
}

function add11(x) {
	return x + 1;
}

const additty = (x) => {var i = 0; while(i < 9) {`x + ${i}\n`;  i++;}}


additty();




// Using Ternary Operators
// The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.


// Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.


// // Equivalent code using multi-line if statements.
// if (is_nice)
//   state = "nice"
// else
//   state = "not nice"
// Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.


const yeah_nope = (is_nice) => {var state; is_nice == true ? state = "nice" : state = "not nice"};

yeah_nope(true);

yeah_nope(false);




// Check the principles of minimalist code in the intro to the first challenge.

// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

// Tips
// Executing a return will effectively end your function.



// function equilbrium (x) {
// 	if (x > 0) {
// 		return "positive"
// 	} else if (x < 0) {
// 		return "negative"
// 	} else {
// 		return true
// 	}
// }


function equilbrium(x) {
    if(x > 0) return "positive"
    if(x < 0) return "negative"
    return true
}


const equilbrium2 = x =>  (x > 0) ?  "positive" : (x < 0) ?  "negative" :  true

const equilbrium3 = (x) => {Math.sign(x) ? "positive" : Math.sign(x) ? "negative" : true}




// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(s) {
    if(s.length % 2 == 0) {return true} else {return false}
}

var fairlyOdd = oddOrEven("apples");
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

oddOrEven("pears");
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

oddOrEven("cherry");


// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

function* destructuringArrays(arr_dest) {
   var theMap =  new Map([arr_dest, function () {arr_dest**2}])

   var i = 0;
   
   while(true) {
    // yield theMap;
    yield i;
    i++;
   }

}

const arr_dest = [-1, 2, 3, 4, 5, 6]
var [map_a, map_b, map_c, map_d, map_e] = destructuringArrays(arr_dest);



function destructuringArrays2(arr_dest, {
    async = true,
    beforeSend = null,
    cache = true,
    complete = undefined,
    crossDomain = false,
    global = true,
  }) {

  }



//   7. Create a function that filters out negative numbers

const negFilter = () => {console.log("The Negative Filter", arr_dest.filter((arr_i) => {return arr_i < 0;}))}

negFilter();


// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

const inchesToFeet = new Function("measurement", "return measurement / 12;")


inchesToFeet(324);

inchesToFeet(12);

inchesToFeet(36);




// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.

howManyWalls(100, 4, 5);

howManyWalls(10, 15, 12);

howManyWalls(41, 3, 6);

// Notes

// Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
// All walls will have the same dimensions.
// All numbers will be positive integers.


function howManyWalls(n, w, h) {
    if (0 ==  Math.trunc(Math.floor(n / (arguments[1] * arguments[2])))) return 0 
    else return Math.floor(arguments[0] / (arguments[1] * arguments[2]));
   
}


// 8. Remove the spaces found in a string


const removeSpace = (s) => {return s.trim().trimStart().trimEnd()}

const removeSpace2 = s => {return s.replaceAll(/\s/g, "")}

let string_words =  "leArning is hard, bUt if You appLy youRself you can achieVe success";
removeSpace(string_words);

removeSpace2(string_words);


// 9. Return a Boolean if a number is divisible by 10


const divisibleTen = new Function("n", "return Number.isInteger(n / 10) ? true : false;")

divisibleTen(10);

divisibleTen(0);

divisibleTen(75);



// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(n, e) {
    for (var i = 0; i < e; i++) {
        var exp_result = n *= n;        
    }
    return Math.pow(n, e)
}


calculateExponent(5, 5);

calculateExponent(10, 10);

calculateExponent(3, 3);



// Create a function that accepts an array and returns the last item in the array.

const getLastItem1 = arr_last => arr_last.pop

const getLastItem2 = (arr_last) => {return arr_last[(arr_last.length)-1]}

const getLastItem3 = arr_last => {return arr_last.slice(-1)[0]}


getLastItem1([1, 2, 3]);

getLastItem2(["cat", "dog", "duck"]);

getLastItem3([true, false, true]);




// 10. Return the number of vowels in a string


function getCountVowel(str) {
    const vowels = ["a", "e","i","o","u"];
    var vowel_result = str.search(/vowels/gi);
    var count = 0;

    for(var letter of str.toLowerCase()) {
        if(str.includes(letter)) {
            count += 1;
        }
    }

}

let str_vowels =  "Return the number of vowels in a string"

getCountVowel(str_vowels);



let parseINT = (b) => b.split("").map((e,i) => {
    let value = e.charCodeAt(0) - 48;
    return value * [...Array(((i - b.length) * -1)).keys()].reduce((a, b) => a > 0 ? (a * 10) : 1, 0);
}).reduce((a, b) => a + b, 0)




parseINT(str_vowels);


function closureParseStringInt(num) {

    if(typeof(num) == "number") {
        function intToString(num) {
            let int_string = num.toString();
        }
    }

    if(typeof(num) == "string") {
        function stringToInt(num) {
            let int_string = parseInt(num);
        }
    } 
    

    function intToString(num) {
        let int_string = num.toString();
    }
    
    function stringToInt(num) {
        let int_string = parseInt(num);
    }


    if(typeof(num) == "string") {
        stringToInt(num);
    }
    else if(typeof(num) == "number") {
        intToString(num);
    }
    else {
        TypeError;
    }
}



// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called
// stringToInt() that converts strings into integers.


closureParseStringInt(4);

closureParseStringInt("4");

closureParseStringInt(29348);




// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many
// different patterns of on and off can we have?

const posCom = new Function("n", "return (n) => Math.pow(2, n);")

posCom(1);

posCom(3);

posCom(10);



// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

const imposterFormula = (i, p) => {return (100 * (i / p)).toFixed(2) + "%";}

imposterFormula(1, 10);

imposterFormula(2, 5);

imposterFormula(1, 8);




// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

const leapYear1 = y => {if(new Date(y, 1, 29).getDate() === 29) {return true;} else {return false}}

const leapYear2 = (y) => {if(y % 100 === 0) {if(y % 400 === 0) {return true} else { return false}} else if(y % 4 == 0) {return true} else {return false}}

const leapYear3 = y => {if((y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)) {return true} else {return false}}

leapYear1(2020);

leapYear2(2021);

leapYear3(1968);



// I'd like to calculate how long on average I've lived in a single house.

// Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.

function yearsInOneHouse (a, t) {return Math.floor(a/++t)} 

yearsInOneHouse(30, 1);

yearsInOneHouse(15, 2);

yearsInOneHouse(80, 0)


// Write a function that returns true if a year is a leap, otherwise return false.

// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.

// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.

// Look at the examples, and if you need help, look at the resources panel.

const leapYear = y => {if(new Date(y, 1, 29).getDate() === 29) {return true;} else {return false}}

leapYear(1990);

leapYear(1924);

leapYear(2021);


// Create a function that takes a word and returns the new word without including the first character.

const newWord1 = s => {return s.substring(1)}

const newWord2 = s => {return s.replace(s[0], "")}

const newWord3 = s => {return s.slice(1)}

const newWord4 = s => {var result_char = []; for(var idx=1;idx<s.length;idx++) {result_char.push(s.charAt(idx));} return result_char.join("");}

newWord1("apple");

newWord2("cherry")

newWord3("plum");

newWord4("orange");


// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

// Create a function that returns the opposite of the given boolean, as a number.

const flipBool1 = b => {var string_bool = !(new Boolean(b).valueOf()); return string_bool;}

function flipBool2(b) {if(!(b === "true" || b === 1 || b === true)) {return Number(1);} else {Number(0);}}

// @ts-ignore
const flipBool3 = b => {if(b === "false" || b === 0 || b === "" || b === NaN || b === false || b === undefined) {return 1;} else {return 0;}}



flipBool1(true);

flipBool2(false);

flipBool3(1);

flipBool1(0);

// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

const helloName = n => {console.log(`Hello ${n}!`); return "Hello " + n + "! Do you want to play a game with me!";}

helloName("Gerald");

helloName("Tiffany");

helloName("Ed");


// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// Notes
// Dont forget to return the result.
// Input will always be a valid integer.
// Expect negative integers (whole numbers).


const isEvenOrOdd = n => {return Number(Math.abs(n)) % 2 == 0 ? "even" : "odd"}

isEvenOrOdd(3);

isEvenOrOdd(146);

isEvenOrOdd(19);

// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.


nameString("Mubashir");

nameString("Matt");

nameString("javaScript");

// function nameString(name){
// 	var b == "Edabit"
// 	var result == name + b
//   	return result
// }

function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}


// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

// function isOdd(num){
//   ret n % 19 += 123;
// }

function isOdd(num){
    return Math.abs(num) % 2 !== 0 ? true : false;
}

isOdd(-5);

isOdd(25);

isOdd(0);


// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

// Stack the Boxes

// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

const stackBoxes = b => {return (Math.pow(2, b));}


stackBoxes(1);

stackBoxes(2);

stackBoxes(0);

stackBoxes(3);

// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

// Notes
// Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

const areaShape = new Function("b", "h", "s", "return s == \"triangle\" ? 0.5 * b * h : s == \"parallelogram\" ?  b * h : \"the shape of things in water\"")

areaShape(2, 3, "triangle");

areaShape(8, 6, "parallelogram");

areaShape(2.9, 1.3, "parallelogram");

areaShape(2.9, 1.3, "parallelosam");


// Create a function that takes an array of numbers or letters and returns a string.


arrayToString([1, 2, 3, 4, 5, 6]) ;

const arr_string = arrayToString(["a", "b", "c", "d", "e", "f"]);

arrayToString2([1, 2, 3, "a", "s", "dAAAA"]) ;

function arrayToString(a) {
    let arr = a;
    var str = a.join("")

    arrayToString2(arr);
    return function () {
        return arr.toString();

    }
   
}

function arrayToString2(a) { let arr = ""; for(var i of a) {arr += i}}


// Create a function to concatenate two integer arrays.

const concat1 = (arr1, arr2) => {return arr1 + " " + arr2;}

const concat2 = (arr1, arr2) => {return arr1.concat(arr2);}

const concat3 = (arr1, arr2) => {arr2.forEach(element => {arr1.push(element)}); return arr1;}

concat1([1, 3, 5], [2, 6, 8]);

concat2([7, 8], [10, 9, 1, 1, 2]);

concat3([4, 5, 1], [3, 3, 3, 3, 3]);


// Create a function that takes an array and a string as arguments and returns the index of the string.

const findIndex = (a, s) => {return a.indexOf(s);}

const findIndex2 = (a, s) => {return a.findIndex((element_predicate) => {element_predicate === s});}

const findIndex3 = (a, s) => {var count = 0; a.forEach(element => {if(element != s){count += 1}}); return count;}

const findIndex4 = (a, s) => {return a.indexOf(a[s]);}

findIndex(["hi", "edabit", "fgh", "abc"], "fgh");

findIndex2(["Red", "blue", "Blue", "Green"], "blue");

findIndex3(["a", "g", "y", "d"], "d");

findIndex4(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple");



// Given an index and an array, return the value of the array with the given index.

const valueAt1 = (a, o) => {return a[Math.floor(o)-1];}

const valueAt2 = (a, o) => {var index = (Math.floor(o)-1); return a.index;}

const valueAt3 = (a, o) => {for(var iterator = 0; iterator < Math.floor(o); iterator++){ var end = a[iterator];} return end;}

const valueAt4 = (a, o) => {var iterator = a.values(); for(var i = 0; i < Math.floor(o); i++){ var end = iterator.next();} return end;}

valueAt1([1, 2, 3, 4, 5, 6], 10 / 2);

valueAt2([1, 2, 3, 4, 5, 6], 8.0 / 2);

valueAt3([1, 2, 3, 4], 6.535355314 / 2);

valueAt4([1, 2, 3, 4, 5, 6], 9 / 2);


// Create a function that finds the index of a given item.

const search1 = (a, n) => {a.map(function (element, index, array) {element === n; return index;});}

const search2 = (a, n) => {a.filter((predicate, index, array) => {if(a === n) {return n;}}).indexOf()}

const search3 = (a, n) => {a.find((predicate, index, array) => {a===n; return index;}); }

search1([1, 5, 3], 5)

search2([9, 8, 3], 3);

search3([1, 2, 3], 4);




// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.


sumArray([1, 2, 3, 4, 5]);

sumArray([-1, 0, 1]);

sumArray([0, 4, 8, 12]);


// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

// function sumArray(arr) {
// 	sum ,	
//   for (i=0, i<arr, i++) {
// 	  sum+=arr[i]
// 	}
//   return sum
// }

function sumArray(arr) {var sum; for (var i=0; i<arr.length; i++) {sum+=arr[i];}return sum;}


// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

const search = (a,n) => {return a.n}

search([1, 2, 3, 4], 3);

search([2, 4, 6, 8, 10], 8);

search([1, 3, 5, 7, 9], 11);


// Notes
// If the item is not present, return -1.
// The given array is ordered.





// Create a function that returns a number, based on the string provided. Here is a list of all digits:

const word = (s) => {let stringNumber = {"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"zero":0};var dot = s; console.log(stringNumber.s);}

function word2(s) {switch (s){case"one":return 1;case"two":return 2;case"three":return 3;case"four":return 4;case"five":return 5;case"six":return 6;case"seven":return 7;case"eight":return 8;case"nine":return 9;case"zero":return 0}}

const word3 = s => {let stringNumber = {"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"zero":0}; return stringNumber[s];}

function word4(s) {
    var stringNumber = new Map;
    stringNumber.set("one",1,).set("two",2).set("three",3).set("four",4).set("five",5).set("six",6).set("seven",7).set("eight",8).set("nine",9).set("zero",0);
    return stringNumber.get(s);
}

// const word5 = s => {let stringNumber = {"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"zero":0}; stringNumber.map((key, value) => {key===s; return value;})}



word("one");

word2("two");

word3("nine");

word4("zero");

// word5("five");
// Notes
// All numbers will be single digit positive integers




// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.


const check1 = (a, n) => {return a.filter((predicate_value, index, array) => {if(n === predicate_value){return predicate_value}}) > 0 ? true : false}

const check2 = (a, n) => {return a.includes(n) ? true : false}

const check3 = (a, n) => {return a.find((p) => {p === n})}


const check4 = (a, n) => {return a.some((p) => {n === p})}

const check6 = (a, n) => {return a.indexOf(n) !== -1 ? true : false}


check1([1, 2, 3, 4, 5], 3);


check2([1, 1, 2, 1, 1], 3);


check3([5, 5, 5, 6], 5);


check4([], 5)


check6([5, 5, 5, 6], 5);



// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section down below.

// Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.

// Tips
// Converting a boolean, or something that will ultimately be interpreted as a boolean, into a boolean is redundant.

// For example, the code:

// let bool = Boolean(x < 4)
// return bool === true
// Is equivalent to simply:

// return x < 4
// A comparison with <, <=, ===, !==, >=, > will always result in a boolean, therefore using the function Boolean() is totally unnecessary.
// bool === true is redundant, as it will always return bool.
// To obtain the opposite of bool we could use bool === false. However, a much cleaner way of doing this is simply !bool.
// While preserving readability, avoid declaring unnecessary variables.

// function parity(n) {
// 	let remander = Boolean(n % 2)
// 	if(remainder === false) {
// 		return "even"
// 	}
// 	if(remainder === true) {
// 		return "odd"
// 	}
// }


function parity(n) {return Boolean(Math.floor(Math.abs(n)) % 2) ? "odd" : "even";}

parity(2);

parity(5);

parity(1.5)


// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

const parseArray1 = a => {a.map((v,i,a) => {return String(v)})}


const parseArray2 = a => {a.forEach((e) =>{return "" + e})}


const parseArray3 = a =>{a.map((v,i,a) => {return `${v}`})}


const parseArray4 = (a) =>{a.map((e) => {return e.toString()})}



parseArray1([1, 2, "a", "b"]);


parseArray2(["abc", 123, "def", 456]);


parseArray3([1, 2, 3, 17, 24, 3, "a", "123b"]);


parseArray4([]);




// Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

// The Rubik's cube of side length 1 has 6 stickers.
// The Rubik's cube of side length 2 has 24 stickers.
// The Rubik's cube of side length 3 has 54 stickers.

const howManyStickers = n => {return 6 * Math.pow(2, n);}

howManyStickers(1); 

howManyStickers(2);

howManyStickers(3);



// The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.



// let obj_noConfig = new Object();

// obj_noConfig = {noChanges: false };

const obj_noConfig = {noChanges: false };

  
// Object.freeze(obj_noConfig);

// Object.seal(obj_noConfig)

Object.defineProperty(obj_noConfig, "obj_noConfig_prop", {value: 13, writable: true, enumerable: true, configurable:true});

Object.defineProperties(obj_noConfig, {obj_noConfig_prop : {value: 1313, writable: true, enumerable: true, configurable:true}})

const newObj_easy = Object.create(obj_noConfig);

console.log("Object is obj_noConfig extensible: ", Object.isExtensible(obj_noConfig))
console.log("Object is obj_noConfig frozen: ", Object.isFrozen(obj_noConfig))

// obj_noConfig.noChanges = true;

function preventChange(obj_noConfig) {
    // Write your code here, don't use a return statement
    Object.freeze(obj_noConfig);
    // console.log("Object is obj_noConfig frozen: ", Object.isFrozen(obj_noConfig))
    // console.log("No Change: ", obj_noConfig.noChanges);

    // obj_noConfig.noChanges = true;
    // obj_noConfig.signature = "whatever";
    // return obj_noConfig;
  
  };

preventChange()





// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.


const carsNeeded = n => Math.ceil(n/5);

carsNeeded(5);

carsNeeded(11);

carsNeeded(0);




// Create a function that returns true if a string contains any spaces.

const hasSpaces = new Function("s","return s.includes(' ');")

const hasSpaces1 = s => {return s.split("").filter((p, i, a) =>{p === " "}) ? true : false;}

const hasSpaces2 = s => {return s.split("").forEach((e) => {if(e.charCodeAt(0) == 0o40) {return true;} else{return false;}}) }

function hasSpaces3(s) {s.split("").forEach((e) => { if(e.search(" ")){return true;} else{return false;}})}

function hasSpaces4(s) {return s.indexOf(" ") >= 0 ? true : false;}

function hasSpaces5(s) {for(const e of s) {let test = e.charCodeAt(0); if(e.charAt(0) == " "){return true;} else{return false;}}}

const hasSpaces6 = s => {let re = RegExp("/^\s+$/", "g"); return re.test(s) ? true : false;}

function hasSpaces7(s) {if(s.length === s.replace(" ", "")) {return false;} else{return true;}}

hasSpaces("hello");

hasSpaces1("hello, world");

hasSpaces2(" ");

hasSpaces3("");

hasSpaces4(",./!@#");

hasSpaces5(" ");

hasSpaces6("hello, world =6");

hasSpaces7(",./!@#");




// Kinetic energy can be calculated with the following formula:

// KE = 1/2mv²

// m is mass in kg
// v is velocity in m/s
// KE is kinetic energy in J
// Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.

const kineticEnergy = (m, v) => { return (0.5 * ((m * v) ** 2)).toFixed(2)}

kineticEnergy(60, 3);

kineticEnergy(45, 10);

kineticEnergy(63.5, 7.35);


// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(obj) { return obj.width * obj["length"] * obj.height;}

volumeOfBox({ width: 2, length: 5, height: 1 });

volumeOfBox({ width: 4, length: 2, height: 2 });

volumeOfBox({ width: 2, length: 3, height: 5 });


// The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.

// Create a function that recreates this functionality.

const absolute = a => {return Math.abs(a);}

const absolute1 = a => {return a * -1;}

const absolute2 = a => {return ~a + 1;}

absolute(-1.217197940);

absolute1(-12.1320);
 
absolute2(-544.0);

absolute(4666);

absolute(-3.14);

absolute(250);

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

const isLastCharacterN = n => {return n.match(/n$/i) ? true : false;}

const isLastCharacterN2 = n => {return n.lastIndexOf("n") >= 0 ? true : false;}

const isLastCharacterN3 = n => {return n.substring(n.length-1) == "n" ? true : false;}

const isLastCharacterN4 = n => {return n.slice(-1) === "n" ? true : false;}

const isLastCharacterN5 = new Function("n", "return /n$/.test(n) ? true : false;")

function isLastCharacterN6(n) {Array.from(n, (i) => i === "n")[n.length]}

function isLastCharacterN7(n) {if(Array.from(n, (i) => i)[n.length] === 'n') {return true} else {return false;}}

function isLastCharacterN8(n) {return n.endsWith("n") ? true : false;}


isLastCharacterN("Aiden")

isLastCharacterN2("Piet");

isLastCharacterN3("Bertn")

isLastCharacterN4("Dean");

isLastCharacterN5("Pietn");

isLastCharacterN6("Dean");

isLastCharacterN7("Bert");

isLastCharacterN8("Sullivan");


// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]

function toNumberArray1(arr) {var arrNum = Number(arr); return arrNum;} // 0

function toNumberArray2(arr) {return arr.map((v,i,a) => {return v * 1});} // 1

function toNumberArray3(arr) {return arr.map((v,i,a) => {return Number.parseInt(v, 10)});} // 1

function toNumberArray4(arr) {return arr.forEach(element => {return +element});} // 0

function toNumberArray5(arr) {return arr.map((v,i,a) => {return v>>>0});} // 1

function toNumberArray6(arr) {var arrNum = arr.forEach(element => {return ~~element}); return arrNum;} // 1

function toNumberArray7(arr) {return arr.map(Number)} // 1

function toNumberArray8(arr) {return arr.map((v,i,a) => {return Number(v)})} // 1

toNumberArray1(["9.4", "4.2"]);

toNumberArray2(["91", "44"]);

toNumberArray3(["9.5", "8.8"]);

toNumberArray4(["4", "2"]);

toNumberArray5(["5", "8"]);

toNumberArray6(["1", "4"]);

toNumberArray7(["9", "4"]);

toNumberArray8(["66", "34"]);


// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write a function that returns the strings:

// "both" if both given booleans a and b are true.
// "first" if only a is true.
// "second" if only b is true .
// "neither" if both a and b are false.
// Tips
// If-else statements can be written as a oneliner using Javascript's ternary operator.

// For example, the code:

// function startswith(name) {
//   if ("AEIOU".includes(name[0])) {
//     return "vowel"
//   } else {
//     return "consonant"
//   }
// }
// Can be simplified to:

// function startswith(name) {
//   return "AEIOU".includes(name[0]) ? "vowel" : "consonant"
// }
// Bonus
// You can concatenate as many ternary operators as you want. However, concatenating too many can diminish the readability of your code.



function areTrue(a, b) {
	if (a == true) {
		if (b == true) {
			return "both";
		}
		else {
			return "first";
		}
	}
	else if (b = true) {
		return "second";
	}
	else {
		return "neither";
	}
}

const areTrueMin = (a, b=false) => {return (a == true && b == true) ? "both" : (a == true) ? "first" : (b == true) ? "second" : "neither";}

areTrue(true, true);

areTrueMin(true, true);

areTrueMin(true, false);

areTrueMin(false, true);

areTrueMin(false, false);

// Check the principles of minimalist code in the intro to the first challenge.

// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write a function that returns the first truthy argument passed to the function. If all arguments are falsy, return the string "not found". The function will be called with a minimum of one and a maximum of four arguments: a, b, c, d.

// Given a known number of unique items, how many ways could we arrange them in a row?

// Create a function that takes an integer n and returns the number of digits of the number of possible permutations for n unique items. For instance, 5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.

// function firstOne(a, b = 0 c = 0, d = 0) {
// 	if (a)
// 		return a;
// 	else if (b)
// 		return b;
//   else if (c)
// 		return c;
//   else if (d)
// 		return d;
// 	else
// 		return "not found";
// }

// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

function repeatString(s,n) { try {if(typeof(s) != "string") throw "Not a string1"; else {return s.repeat(n)}} catch(error){console.log("Try again!")} finally{TypeError}}

// function repeatString(s,n) { if(typeof(s) =="string") {return s.repeat(n)} else{return "Not a string1"}}

const repeatString2 = (s,n) => {var repeat = ""; for(var i = 1; i <= n; i++) {repeat += s.substring(0,s.length)} return repeat;}


repeatString("Mubashir", 2);

repeatString2("Matt", 3);

repeatString(1990, 7);

function firstONe(a, b = 0, c = 0, d = 0, arr = []) {for(const e of arguments) { arr.push(e)}; arr.find((v,i,a) =>{return v == true;})}

const firstONe2 = (a, b = 0, c = 0, d = 0, arr = []) => {  return a || b || c || d;}

firstONe(1, 0, 0, 0);
 
firstONe2(1, 0, 0, 0);



// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.

const operate = new Function("n","m","o", "return n + o + m;")

const operate2 = (n,m,o) => {return eval(n + o + m)}

const operate3 = (n,m,o) => {return `n + 0 + m`;} // 0

const operate4 = (n,m,o) => {return `${n + o + m}`;} // 0


operate(1, 2, "+");

operate2(7, 10, "-");

operate3(20, 10, "%");

operate4(20, 10, "%");


// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

function frontThree(s) {return s.slice(0,2).repeat(3)}

const frontThree2 = s => {var subS; for(var i = 0; i<=3; i++) {subS += s.substring(0,2);} return subS;}

let tf = frontThree("Python");

frontThree2("Cucumber");

frontThree("bioshock");




// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

const arrBetween = (n, o, a) => {return a.filter((p, i, a)=>{n > p || o <p })}

arrBetween(3, 8, [1, 5, 95, 0, 4, 7]);

arrBetween(1, 10, [1, 10, 25, 8, 11, 6]);

arrBetween(7, 32, [1, 2, 3, 78]);


// Create a function that returns the number of arguments it was called with.

function numArgs(...a) {return arguments.length;}

const numArgs2 = (...a) => {return a.length;}

numArgs();

numArgs2("foo");

numArgs("foo", "bar");

numArgs(true, false);

numArgs({});




// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
function relationToLuke(s) {const relation = {Darth_Vader:"father", Leia:"sister", Han:"brother in law", R2D2:"droid"};
    switch(s) {
        case relation.Darth_Vader:
            console.log("Luke, I am your father.");
            break;
        case relation.Leia:
            console.log("Luke, I am your sister.");
            break;
        case relation.Han:
            console.log("Luke, I am your brother in law.")
        case relation.R2D2:
            console.log("Luke, I am you robot friend!");
            break;
        default:
            console.log("Let the force be with you!")}
}

relationToLuke("Darth Vader");

relationToLuke("Leia");

relationToLuke("Han");



// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is 
// situated in).

const cityFacts = o => {console.log(`${o.name} has population of ${o.population} and is situated in ${o.continent}`)}

cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
});

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
});



// Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's 
// perimeter is greater than the circumference of the circle.

const circle_or_square = (c, p) => {return 2 * c * Math.PI > 4*Math.sqrt(p) ? true : false; }

circle_or_square(16, 625);

circle_or_square(5, 100);

circle_or_square(8, 144);



// Notes
// You can use Pi to 2 decimal places (3.14).
// Circumference of a circle equals 2 * Pi * radius.
// To find the perimeter of a square using its area, find the square root of area (to get side length) and multiply that by 4.


// The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The 
// candy should be in plastic and the bread should be in a bag.

// The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

const objContainer = {bag: ["Bread", "Bagel", "Chips", ], bottle: ["Beer", "Soda", "Juice" ], plastic: ["Candy", "Carrots", "Oranges"] }

function getContainer(product) {
    let container;
    switch (product) {
            case "Bread":
                container = "bag"
                break
            case "Beer":
                container = "bottle"
                break
            case "Milk":
                container = "bottle"
                break
            case "Cereal":
                container = "box"
                break
            case "Eggs":
                container = "carton"
                break
            case "Candy":
                container = "plastic"
                break
            default:
                container = null
        }

        return container
}

const getContainer2 = product => {let test = Object.values(objContainer).forEach((v,i,a)=>{v.map(p => {if(p==product) {return Object.keys(objContainer)[i];} else {return null;}})})}


getContainer2("Bread");

getContainer("Beer");

getContainer("Candy");

getContainer("Cheese");

// Notes
// Think about what the object's packaging should be.






// Notes
// This challenge requires some understanding of combinatorics.

noPermsDigits(0);

noPermsDigits(1);

noPermsDigits(5);

noPermsDigits(8);

function noPermsDigits(c) {
    for(var i = 0; i < c; i++){return BigInt(i *= i);}
}


// const testDate = () => {const date = new Date(); let minutes = date.getMinutes().toFixed(2).toString(); let hour = date.getHours().toString(); 
// "document.createElement("testDate").innerHTML = hour+":"+minutes;"}

// testDate()

// Create a function that takes an array and returns the types of values (data types) in a new array.

// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples

arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes(a) {return a.map((v,i,a) => {return typeof v})}



// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

const hasSameBread = (a, b) => {return a[0] === b[0]}

hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
);

hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
);

hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
);


// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".


isPlural("changes");

isPlural2("change");

isPlural3("dudes");

isPlural4("magic");

// Notes
// Don't forget to return the result.
// Remember that return true (boolean) is not the same as return "true" (string).
// This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

function isPlural(s) {return s[s.length-1] == "s";}

function isPlural2(s) {return s.endsWith("s");}

function isPlural3(s) {return s.substring(-1) == "s";}

function isPlural4(s) {return s.slice(-1)== "s";}


// Create a function that takes a string and returns the concatenated first and last character.

const firstLast = s => {return s[0] + s[s.length-1];}

const firstLast2 = s => {return s.slice(0,1) + s.slice(-1)}

const firstLast3 = s => {return s.charAt(0) + s.charAt(s.length-1);}

firstLast("ganesh");

firstLast2("kali");

firstLast3("shiva");

firstLast("vishnu");

firstLast("durga");