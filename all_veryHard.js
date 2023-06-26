// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved 
// each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).



const trackRobot = function Robot(...coord) {

    var b = coord[0] - arguments[2];
    var a = arguments[1] - coord[3];

    var set_coord = new Set([a, b]);

    var test1 = coord.forEach((e, i) => {if(i % 2 == 0) return e });

    if(!(isNaN(a))) {var test2 = coord.filter((e, i) => {if(i % 2 == 0) return e }).reduceRight((e) => {return a += e;})}
    else {a = 0}

    if(!(isNaN(b))) {var test3 = coord.filter((e, i) => {if(!(i % 2 == 0)) return e }).reduceRight((e) => {return b += e;})}
    else {b = 0}


    if(isNaN(a) && isNaN(b)) console.log("No movement means the robot stays at (0, 0).")
} 

trackRobot(20, 30, 10, 40);

trackRobot();
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10);
// The amount to move can be negative.



// Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.

const convertTime = str_time => parseInt(str_time.substring(0,2)) + 12 == 24 ? str_time.replace(str_time.substring(0,2), "00").slice(0,8) : str_time.replace(str_time.substring(0,2), parseInt(str_time.substring(0,2)) + 12).slice(0,8)

convertTime("07:05:45PM");

convertTime("12:40:22AM");

convertTime("12:45:54PM");




// Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.

// A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.

// For instance:

// [3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

// [3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
// After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.

// For instance:

// [3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.

// Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or 
// (even, even).

// Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).

// Given an array, calculate the number of liked spots.


function availableSpots(arr, num) {
    
    var idx = 0, currCount = 0
    arr.reduce((previousValue, currentValue, currentIndex, array, initialValue) => {
        // if(num % 2 == 0) {if(((arr[index] % 2 == 0) && (num % 2 == 0)) || ((arr[index] % 2 == 1) && (num % 2 == 0))) {return currCount += 1}}
        // else {if(((arr[index] % 2 == 1) && (num % 2 == 1)) || ((arr[index] % 2 == 0) && (num % 2 == 1))) {return currCount += 1} }

        if(num % 2 == 0) {if((array[idx] % 2 == 0) || (array[idx+1] % 2 == 0)) {currCount += 1}}
        else {if((array[idx] % 2 == 1) || (array[idx+1] % 2 == 1)) {currCount += 1}}
        idx += 1
    }
    )

    arr.map((element, index) => {
    
        if(num % 2 == 0) {if((arr[index] % 2 == 0) || (arr[index+1] % 2 == 0)) {currCount += 1}}
        else {if((arr[index] % 2 == 1) || (arr[index+1] % 2 == 1)) {currCount += 1}}
        idx += 1
    }
    )

} 





availableSpots([0, 4, 6, 8], 9);
// 9 likes NONE of the following spots: [0, __, 4], [4, __ , 6], [6, __, 8] b/c all of his neighbors are even.

availableSpots([0, 4, 6, 8], 12);
// 12 likes ALL of the spots.

availableSpots([4, 4, 4, 4, 5], 7);
// 7 dislikes every spot except the last one at: [4, __, 5].

availableSpots([4, 4], 8);






// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// Notes
// You must mutate the original array.
// Keep the relative order of the non-zero elements the same.

const zeroesToEnd1 = (a) => {a.sort().forEach(element => {if(element == 0) {a.shift(); a.push(0);}})}

const zeroesToEnd2 = (a) => {a.sort().map( (element, index, array) => {if(array[0] == 0) {a.splice(0,1); return a.push(0);}})}

const zeroesToEnd3 = (a) => {for(var value of a) {if(value == 0) {delete a[value]; a.push(0);}}}

zeroesToEnd1([1, 2, 0, 0, 4, 0, 5]);

zeroesToEnd2([0, 0, 2, 0, 5]);

zeroesToEnd3([4, 4, 5]);

// zeroesToEnd([0, 0]);



// Write a function that calculates overtime and pay associated with overtime.

// Working 9 to 5: regular hours
// After 5pm is overtime
// Your function gets an array with 4 values:

// Start of working day, in decimal format, (24-hour day notation)
// End of working day. (Same format)
// Hourly rate
// Overtime multiplier
// Your function should spit out:

// $ + earned that day (rounded to the nearest hundredth)


overTime([9, 17, 30, 1.5]);

overTime([16, 18, 30, 1.8]);

overTime([13.25, 15, 30, 1.5]);


function overTime(arr_time) {
    
    var pay = arr_time[1] > 17 ? ((arr_time[1] - 17) * arr_time[3] * arr_time[2]) + ((arr_time[1] - arr_time[0]) * arr_time[2]).toFixed(2): ((arr_time[1] - arr_time[0]) * arr_time[2]).toFixed(2)

    console.log(`$${pay}`)
}



// Create a function that accepts str and cases as parameters where the string is split into N distinct cases of equal length as shown:

// Notes
// If it's not possible to split the string as described, return ["Error"].


splitNCases("Strengthened", 6);

splitNCases("Unscrupulous", 2);

splitNCases("Flavorless", 1);


// splitNCases = new Function("str", "case", "if(cases % 2 == 0) {var i = 0; const split_arr = []; while(i != str.length) {split_arr.push(str.substring(i, i + str.length/cases)); i += str.length/cases;} return split_arr;} else if(cases === 1) {return str} else {return ["Error"];}")

function splitNCases(str, cases) { 
    if(cases % 2 == 0) {var i = 0; const split_arr = []; while(i != str.length) {split_arr.push(str.substring(i, i + str.length/cases)); i += str.length/cases;} return split_arr;} 
    else if(cases === 1) {return str} else {return ["Error"];}
}




// Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

function doesTriangleFit(t1, t2) {
    var sum1 = (t1[0] + t1[1] + t1[2]); var p1 = sum1/2; var a1 = Math.sqrt(Math.round((p1 * (p1 - t1[0]) * (p1 - t1[1]) * (p1 - t1[2]))))
    var sum2 = (t2[0] + t2[1] + t2[2]); var p2 = sum2/2; var a2 = Math.sqrt((p2 * (p2 - t2[0]) * (p2 - t2[1]) * (p2 - t2[2])))
    if(a1 <= a2) {return true} else {return false}
}

doesTriangleFit([1, 1, 1], [1, 1, 1]);

doesTriangleFit([1, 1, 1], [2, 2, 2]);

doesTriangleFit([1, 2, 3], [1, 2, 2]);

doesTriangleFit([1, 2, 4], [1, 2, 6]);



// Create a function that takes a string and returns an object. The returned object will have a common property for all detected type content named contentType the possible 
// values for this property are "HTML", "CSS", "TEXT".

// Your function should be able to detect HTML and CSS else it's just TEXT.
// If you detect HTML the returned object will have a special property named "tags". "tags" is an object with all content tags name and how many times these tags were called
//  in content (see example #3).
// If you detect CSS, your returned object will have a special property named cssTargets. cssTargets is an object with all content targets name and how many times these tags 
// were called in content (see example #2).
// If you don't detect HTML or CSS, the content is detected as TEXT and object will have a special property named lineNumber (see example #1).


// analyzeContent("this is a test\nSeems to work")
// ➞ { contentType: "TEXT", lineNumber: 2 }

// analyzeContent("body{blabla} a{color:#fff} a{ padding:0}")
// ➞ { contentType: "CSS", cssTargets: { body: 1, a: 2 } }

// analyzeContent("<html><div></div><div></div></html>")
// ➞ { contentType: "HTML", tags: { html: 1, div: 2 } }

// Notes
// If HTML content has been detected the returned object couldn't have cssTargets property and lineNumber property and that's same for type of detection. Only the common 
// property contentType stay inside the returned object.
// <!DOCTYPE html> and comments shoudn't be detected.
// The content can be minified or not as needed.


function analyzeContent(content) {
    Object.defineProperties(String.prototype, {
        countContent: {
            value: function(a, k) {  
                return a.filter((i) => i.match(/\w+/i) == k).length
            }
        }
    });


    Object.defineProperties(String.prototype, {
        countContent2: {
            value: function(reg) {
                return this.filter(x => reg.search(/x/)).length;
            }
        }
    });

  

    // Specific string pattern and word or general?
    // Override object: var result = { contentType: "" }?
    const result = { contentType: "" }
    if (content.match(/\w+{(\w+|\W+)*}/i)) {var contentArray = content.match(/\w+{(\w+|\W+)*}/gi).toString(); contentArray.split(" ").map((v, i, a) => {var key = v.match(/\w+/i)[0];
    var value = String.prototype.countContent(a, key); return result.contentType = "CSS"; Object.defineProperty(result, "cssTargets", { key : value })});}
    else if (content.match(/(<\w+>)/i)) {var contentArray = content.match(/(<\w+>)/gi).toString(); contentArray.split().map((v, i, a) => {var key = v.match(/(\w+)/i); 
    var value = String.prototype.countContent(a, v); result.contentType = "HTML"; result.tags = { key : value }});}
    else if (content.match(/\n/i)) {var value = content.match(/\n/i).length; result.contentType = "TEXT"; result.lineNumber = value }
    else EvalError

    delete String.prototype["countContent"];

    delete String.prototype["countContent2"];

    console.log(String.prototype.countContent);

    console.log(String.prototype.countContent2)
  
	return result;
}

// analyzeContent("this is a test\nSeems to work");


// analyzeContent("body{blabla} a{color:#fff} a{padding:0}");


// analyzeContent("<html><div></div><div></div></html>");


function NodeLinkList(element, next) {
    this.element = element;
    this.next = null;
  }
  
  function LinkedList() {
    let length = 0;
    let head = null;
    
      // write your code below
    this.push = function (element) {
          let next = this.head;
          this.head = new NodeLinkList(element, next)
          length++;
          return this.head;
      };
    // code ends here
  
    this.check = function () {
      let current = head,
        sol = [];
      while (current) {
        sol.push(current.element);
        current = current.next;
      }
      return sol.join("");
    };
  }


const obj_noConfig = {noChanges: false };

  
// Object.freeze(obj_noConfig);

Object.defineProperty(obj_noConfig, "obj_noConfig_prop", {value: 13, writable: true, enumerable: true, configurable:true});

Object.defineProperties(obj_noConfig, {obj_noConfig_prop : {value: 1313, writable: true, enumerable: true, configurable:true}})

const newObj = Object.create(obj_noConfig);

console.log("Object is obj_noConfig extensible: ", Object.isExtensible(obj_noConfig))
console.log("Object is obj_noConfig frozen: ", Object.isFrozen(obj_noConfig))

// obj_noConfig.noChanges = true;

function preventChange(obj_noConfig) {
    // Write your code here, don't use a return statement
    // Object.freeze(obj_noConfig);
    // console.log("Object is obj_noConfig frozen: ", Object.isFrozen(obj_noConfig))
    // console.log("No Change: ", obj_noConfig.noChanges);

    // obj_noConfig.noChanges = true;
    // obj_noConfig.signature = "whatever";
    return obj_noConfig;
  
  };

preventChange()


// Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

function recurIndex(s) {const recur = new Object(null); let recurArr = []; let i = 0,j = 0; try {s.split("").map(element => {while(i < 2) {recurArr.push(s.indexOf(element, j)); i++; j += 1}
recur[element] = recurArr; recur.valueOf()
});} catch(err) {err.name;TypeError("Null Value, Error Caught!")}/*s.split("").indexOf(s, 2)*/ return recur;

}



recurIndex("DXTDXTXDTXD");
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("YXZXYTUVXWV");

recurIndex("YZTTZMNERXE");

recurIndex("AREDCBSDERD");

recurIndex("");

recurIndex(null);


