// Print all even numbers from 0 – 10



function  allEvenNumbers (upper_range) {
    var i = 0;
    var evenNum = [];
    while(i < upper_range) {
        // evenNum[i] = ((2 * i) + 2);
        i++;

    }
    for(var i = 0; i < upper_range; i++) {
        evenNum[i] = ((2 * i) + 2); 
    }
    console.log(evenNum);
}



allEvenNumbers(10);