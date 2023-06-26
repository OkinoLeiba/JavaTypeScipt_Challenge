class Cal {

    constructor(firstNum, secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        
    }

    

    Addition(a, b) {
        if(typeof(a) === "number" && typeof(b) === "number") {
            let result = a + b;
            // firstNum + secondNum;
            console.log(result);
        }
    } 


    Subtraction(a, b) {
        if(typeof(a) === "number" && typeof(b) === "number") {
            let result = a - b;
            console.log(result);
        }
    }
            


    Divide (a, b) {
        if(typeof(a) === "number" && typeof(b) === "number") {
            let result = a / b;
            console.log(result);
        }
    }



    Multiplication(a, b) {
        if(typeof(a) === "number" && typeof(b) === "number") {
            let result = a * b;
            console.log(result);
        }
    }



}

let firstNum = 10;
let secondNum = 5;

const cal = new Cal;

cal.Multiplication(firstNum, secondNum);

cal.Addition(firstNum, secondNum);

cal.Divide(firstNum, secondNum);

cal.Subtraction(firstNum, secondNum);