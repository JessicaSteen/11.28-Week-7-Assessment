// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True


let arr = [0, 21, 33, 6, 0, -9];
addZero = false;

for (i = 0; i < arr.length; i++) {
  for (n = i+1; n < arr.length; n++) {
    console.log(`${arr[n]} + ${arr[i]} = ${arr[n] + arr[i]}`)
    if(arr[n] + arr[i] === 0) {
      addZero = true;
    }
  };
};
console.log(addZero);

//nested for-loop O(n^2)
//space complexity O(n)


// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if 
// that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // // -> True

// hasUniqueChars("Moonday");
// // -> False

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])  //O(n)
    }
    return uniqueChars.size === word.length
  }

//Runtime: O(n^2)
//Spacecomplexity: O(n)



// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.
// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {  //O(n)
      if(strArr.indexOf(alphabet[i]) < 0){    //O(n)
        return false;
      }
    }
    return true;
}
//Runtime: O(n^2)
//SpaceComplexity: O(1)



// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5


function find_longest_word(listOfWords){

}