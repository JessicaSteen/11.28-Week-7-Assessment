const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


/*
TIMING RESULTS :
extraLargeArray :insert 1.073181708 s  
                append 7.346666 ms

tinyArray: insert 25.208 μs
            append 69.583 μs

smallArray: insert 41.042 μs
            append 91.959 μs

mediumArray: insert 193.125 μs
            append 136 μs

largeArray: insert 9.9685 ms
            append 644.792 μs

PARAGRAPH:

When looking at the runtimes of the arrays listed above the insert array seems to start faster than the
append array, but as the array lengths get longer the append function does better with time. When looking
at both functions they appear to both of a runtime of O(n). Futher,the time complexity of the higher
order array methods in the function are: .push O(1) and .unshift is O(n)--which I think effects the time. 
And according to a scale chart O(1) is faster than O(n)

*/
