//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function getOnlyEvenNums(arr) {
    return arr.map(num => {
        if(num % 2 === 0) {
            return num
        } else return "";
    })
};

// z map bi lahko naredil tudi tako, ampak to je bad practice, ker je map za to, da vrne cel (novi) array:
 
function getOnlyEvenNumsMap(arr) {
    const evenNums = [];
    arr.map(num => {
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    });
    return evenNums;
};

const getEvenNumbers = arr => {
    let newArray = [];
    arr.forEach(num => {
        if(num % 2 === 0) {
            newArray.push(num);
        }
    })
    return newArray;
}

//best solution:

const getOddArray = arr => {
    const newArray = arr.filter(num => num % 2 === 0); //lahko bi napisal samo return, brez nove variable.
    return newArray;
}

let numArr = [1,2,3,4,5,6,8,9];
console.log(getOnlyEvenNums(numArr));
console.log(getEvenNumbers(numArr));
console.log(getOddArray(numArr));
console.log(getOnlyEvenNumsMap(numArr));


//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


const getEvenNumFromArray = arr => {
    let evenNumArray = [];
    arr.forEach(num => {
        if(num % 2 === 0) {
            evenNumArray.push(num);
        }
    })
    return evenNumArray;
}

console.log(getEvenNumFromArray([1,2,3,4,5,6,7,88, 71, 72, 888, 1000 ]));


function getEvens(arr) {
    return (arr.filter(num => num % 2 === 0)).sort();
} 

console.log(getEvens([77,88,99,44,55,66,11,22]));


//Iz arraya vrni nov array z najmanjšo in navečjo števiko:

function compareNumbers(a, b) {
    return a - b;
  }
  
function minMax(arr){
    let newArray = [];
    let sortedArray = arr.sort(compareNumbers);
    newArray.push(sortedArray.at(0))
    newArray.push(sortedArray.at(-1));
    return newArray
  }

  console.log(minMax([5,7,1,9,23,2, 99, 123]));

  //bolj hitra metoda (lower time complexity):

  function minMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for( let i = 0; i < arr.length; i++ ) {

        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
  }

  // or:

  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }


/*  Task CW

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. */

  function sumArray(array) {

    if (array.length === 1 || array[0] === "" || array === null ) {
      return 0
      } else {
      let newArray = array.filter(item => item !== Math.min(...array) || item !== Math.min(...array));
    return newArray.reduce((acc, cV) => acc + cV);
  }}


  function sumArray(array) {
    if (array === null || array.length <= 1) {
      return 0;
    } else {
      let minVal = Math.min(...array);
      let maxVal = Math.max(...array);
      let minCount = 0;
      let maxCount = 0;
      let newArray = array.filter(item => {
        if (item === minVal && minCount === 0) {
          minCount++;
          return false;
        } else if (item === maxVal && maxCount === 0) {
          maxCount++;
          return false;
        }
        return true;
      });
      return newArray.reduce((acc, cV) => acc + cV, 0);
    }
  }

  function sumArray(array) {
    if (!array || array.length <= 1) { //je enako kot  if (array === null || array === undefined || array.length <= 1)
      return 0;
    }
  array.sort((a,b) => a - b);
  return array.slice(1, -1).reduce((acc, cV) => acc + cV, 0);
}

function switchItUp(number){
  
  const numberObject = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
  }
  return numberObject[number];
}

console.log(switchItUp(3));

function boogieItUp(number){
  
  const numberArray = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine"
  ]
  return numberArray[number];
}

console.log(boogieItUp(4));


/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/


function likes(names) {
  if (!names || names.length === 0 ) {
    return "no one likes this";
  }
  else if (names.length === 1) {
    return `${names} likes this`;
  }
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}


console.log(likes(["Monika", "John", "Rambo"]));
console.log(likes([]));


//smart solution from codewars:

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}


/* Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function findDuplicates(string){
  let stringArray = string.toLowerCase().split("").sort();
  let checkerArray = [];
  let counter = 0
  for (let i in stringArray) {
    if((stringArray[i] === stringArray[i+1]) && !checkerArray.includes(stringArray[i])) {  //ne deluje , ker je "i" v for in loopu string, pride do concatenacije!
      checkerArray.push(stringArray[i]);
      console.log(checkerArray);
      counter++;
    }
  }
  return counter
}

let testString = "abcaBC232323"

console.log(findDuplicates(testString));

function findDuplicates(string){
  let stringArray = string.toLowerCase().split("").sort();
  let checkerArray = [];
  let counter = 0
  for (let i = 0; i < stringArray.length; i++) {   //for loop deluje, i je num
    if((stringArray[i] === stringArray[i+1]) && !checkerArray.includes(stringArray[i])) {
      checkerArray.push(stringArray[i]);
      console.log(checkerArray);
      counter++;
    }
  }
  return counter
}

//let testString = "abcaBC232323"

console.log(findDuplicates(testString), "CONSOLE LOG");


//elegantna rešitev: //s pomočjo chat GPT:
function duplicateCount(string){
  let stringArray = string.toLowerCase().split("");
  let counts = {};
  let counter = 0;

  for (let char of stringArray) {
    counts[char] = (counts[char] || 0) + 1;  //returna 0, ko gre čez element prvič (counts[char] je undefined)
  }

  for (let char in counts) {
    if(counts[char] > 1){
      counter++;
    }
  }

  return counter;
}


/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */


function findAverage1(array) {
  if(array.length) return 0; 
    return (array.reduce((acc, cV) => acc + cV,0)) / array.length;
 }

 // final, better:
 
 const findAverage = array => array.reduce((acc, cV) => acc + cV,0) / array.length || 0;
 


/*  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

 Example: (Input --> Output)
 
 "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) */


 function isIsogram(str){
 
    str.toLowerCase().split("").sort();

    if(str.length === 0) return true

    for(let i in str) {
  
      i = Number(i);
      if(str[i] === str[i + 1]) {
        
        return false
      }
    }
    return true
}

function isIsogram2(str){
 
  const strArray= str.toLowerCase().split("").sort();

  if(str.length === 0) return true

  for(let i in strArray) {

    i = Number(i);
    if(strArray[i] === strArray[i + 1]) {
      
      return false
    }
  }
  return true
}

console.log(isIsogram("avoca"), "first version");
console.log(isIsogram2("avoca"), "second version");

function isIsogramObjct(str){
 
  const strArray = str.toLowerCase().split("");
  const counterObject = {};

  for(let i of strArray) {
    counterObject[i] = (counterObject[i] || 0) + 1
  }

  console.log(counterObject)

  for( let i in counterObject){
    if (counterObject[i] > 1) return false
  }
  return true
}


console.log(isIsogramObjct("avoca"), "third version")



function isIsogramObjct(str){
 
  const strArray = str.toLowerCase().split("");
  const counterObject = {};

  for(let i of strArray) {
    counterObject[i] = (counterObject[i] || 0) + 1
  }

  for( let i in counterObject){
    if (counterObject[i] > 1) return false
  }
  return true
}


const setFunction = str => {
  str = str.toLowerCase();
  return new Set(str).size === str.length;
}

console.log(setFunction("avoc"), "Set solution");

//creates a Set which has only unique properties. If the number of properties is the same as the string length it means that there are no duplicate letters.



// MAPS ans SETS:

/* let myMap = new Map();

myMap.set('key1', 'jaguar');
myMap.set('key2', 2);
myMap.set(333, true);

console.log(myMap);

let myArray = [1, 2, 2, 3, 3, 3];
let mySet = new Set(myArray);
console.log(mySet);
let uniqueArray = [...mySet];
console.log(uniqueArray);

let myMap1 = new Map();
myMap1.set('a', 1);
myMap1.set('b', 2);
console.log(myMap1);
console.log([...myMap1]); */


//++++++++++++++++++ FIZZBUZZ solutions:

// simple v1:


/* for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
} */

// a bit more elegant:
function fizzBuzzVer() {
  
  for (let i = 1; i<= 100; i++) {
    let container = ""
    if (i % 3 === 0 ) {
      container += "Fizz";
    } 
    if (i % 5 === 0) {
      container += "Buzz"
    }
    console.log(container || i);
  }
}

//best, with a Map:

const fizzBuzzFazzMap = new Map([
  [3, "Fizz"],
  [5, "Buzz"],
  [7, "Fazz"]
]);


for (let i = 0; i <= 100; i++) {

  let container = ""

  for (let [key, value] of fizzBuzzFazzMap) {

    if(i % key === 0) {
    container += value
    }
  }

  if (container === "") {
    container = i;
  }

  console.log(container);
}

//lahko tudi brez mapa, kot array z nestanimi arrayi:

/* Use a Map when:
You want to emphasize that you're associating values (Fizz, Buzz) with keys (3, 5), as opposed to just grouping them together.
You might want to quickly look up the value associated with a key, without looping over the entire collection.

Use an array of arrays when:
The order of the pairs matters (although note that as of ECMAScript 2015, Maps remember the insertion order, too).
You don't need to look up values by key – you're just going to loop over all pairs anyway. */



/* ++++++++++++++++++++ 8kyu Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */



function arrayPlusArray8646(arr1, arr2) {
  const arraysSum = arr1.reduce((acc, cV) => acc + cV) + arr2.reduce((acc, cV) => acc + cV);
  return arraysSum
}


//with for...of loops

function arrayPlusArray123564(arr1, arr2) {
 
  let arraySum = 0;
  
  for( let num of arr1) {
    arraySum += num;
  }
  
  for( let num of arr2) {
    arraySum += num;
  }
  
  return arraySum
}


//with concat():

function arrayPlusArray45469(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//with spred operators:

function arrayPlusArray16469(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}



//8 kyu Reversed sequence ž

/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */


//mine

const reverseSeq787879 = n => {
  
  let numArray= []
  for(let i = n; i > 0; i--) {
    numArray.push(i)
  }
  return numArray
};

//smart:

const reverseSeq = n => {
  return Array(n).fill().map((e,i) => n - i)
};
//console.log(reverseSeq(6));

//Array(n) ustvari novi array z n elementi, fill() zapolni z undefined, map, jim da nove vrednosti


/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */


const number834= array => {
  if(array.length === 0) return [] //ne rabiš tega, [] avtomatično vrne []
  return array.map((e,i) => (i + 1) + ": " + e);
}

//console.log(number834(["a","b", "c"]));



let object3  = {
  _health: 45,
  name: "Bobo",
  get health() {
    return this._health
  },
  set health(hp) {
    this._health = hp
  }
}

const recursiveFunction = (num, sum = 0) => {
  if(num === 0) return sum
  return recursiveFunction(num -1, sum + num );
}

console.log(recursiveFunction(100));

/* Kako napišeš if statement, če hočeš naredit več primerjav?
npr. namesto (value=== X || value === Y || ,...)
 */

const newSet748 = new Map([[1,2], ["apple",2], [function yell(){
  alert("hello")},
 "greeting"]]);
console.log(newSet748);

/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 */

function duplicateEncode6475(word){
 
let wordArray = [...(word.toLowerCase())]

const counterObject2 = {}

for(let i of wordArray) {
  counterObject2[i] = (counterObject2[i] || 0) + 1;
}

console.log(counterObject2)
console.log(wordArray)

const encodedArray = wordArray.map(e => {
  console.log(counterObject2[e]);
  
  if( counterObject2[e] === 1) {
   return "("
  } else {
   return ")"
  }
})

console.log(encodedArray)

return encodedArray.join("")

}

//console.log(duplicateEncode("abrac  adabra"));

//final, better version:


function duplicateEncode(word){
 
  let wordArray = [...(word.toLowerCase())]
  
  const counterObject2 = {}
  
  for(let i of wordArray) { 
    counterObject2[i] = (counterObject2[i] || 0) + 1;
  }
  /* lahko bi bil tudi forEach iterator:
  wordArray.forEach(e => {
    counterObject2[e] = (counterObject2[e] || 0) + 1;
  }); */
  
  const encodedArray = wordArray.map(item => counterObject2[item] > 1 ? ")" : "(" )
  
  return encodedArray.join("")
  
  }

  //very smart codewars solution, slabost je, da ima time complexity O(n^2), ker sta index metode v map metodi.

  function duplicateEncode67436(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

  //če samo primerja, če sta prvi in zadji indeks enaka, če sta, pomeni, se črka pojavi samo enkrat v besedi


/*   7 kyu
 +++++++++++++++++++ Highest and Lowest
  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first. */


  
function highAndLow1(numbers){
  
  const numArray = numbers.split(" ")
  const minNum = Math.min(...numArray);
  const maxNum = Math.max(...numArray);

  //return String(maxNum) +" "+ String(minNum)
  return `${minNum} ${maxNum}`

}

console.log(highAndLow1("1 9 3 4 -5 4"));

//Codewars rešitev:

function highAndLow4343(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


/* 7 kyu
Find the index of the second occurrence of a letter in a string
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1

Good luck ;) And don't forget to rate this Kata if you liked it. */

function secondSymbol(s, symbol) {
  
  const stringArray = s.split("")
  let symbolCount = 0;

  for(let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === symbol) {
      symbolCount++
      if(symbolCount === 2) return i
    }
  }
  return -1
}

console.log(secondSymbol('Hello world!!!','l'));


//chat GPT solution, smart:

function secondSymbol343(s, symbol) {
  const firstIndex = s.indexOf(symbol);
  
  if (firstIndex !== -1) {
    return s.indexOf(symbol, firstIndex + 1);
  }
  
  return -1;
}


/* 7 kyu
+++++++++++++++No ifs no buts */
/* Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"

There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code.  */


function noIfsNoButs(a, b) {
  
  const result = a - b;

  switch(true) {
    case result > 0:
      return `${a} is greater than ${b}`;
    case result === 0:
      return `${a} is equal to ${b}`;
    case result < 0:
      return `${a} is smaller than ${b}`
  };
}
//console.log(noIfsNoButs(3, 3));


/* 7 kyu
Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */


function getCount(str) {
   
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for(let i of str) {
    if(vowels.includes(i)) {
      counter++
    }
  }
  return counter;
}

//console.log(getCount("Catifyuuiik"))


/* 6 kyu
Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */


function count(string) {
  if(string.length === 0) return {};

  const counterObject = {};

  for(let i of string) {
    counterObject[i] = (counterObject[i] || 0) + 1;  
  };

  return counterObject;
}


let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(("climbed tress", "ate peanuts"), false);

console.log(journal)


const ovj = {name: "Faraji", age: 23};
let {name} = ovj; 
console.log(name);
// → Faraji

/* 
7 kyu
Beginner Series #3 Sum of Numbers
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Your function should only return a number, not the explanation about how you get that number. */

function getSum54584(a, b) {
  if(a === b) return a
  const sortedNum = b > a ? [a,b] : [b,a] //OR: const sortedNum = [a, b].sort((a,b) => a-b);
  const sortedNumArray = [];

  for(let i = sortedNum[0]; i<= sortedNum[1]; i++) {
    sortedNumArray.push(i)
  };
  return sortedNumArray.reduce((acc, crr) => acc + crr);
}

// a faster and simpler solution:

function getSumFin43545(a, b) {
  if(a === b) return a
  const sortedNum = b > a ? [a,b] : [b,a];
  let finalSum = 0;

  for(let i = sortedNum[0]; i<= sortedNum[1]; i++) {
    finalSum += i;
  };
  return finalSum
}

/* +++++++++++++++7 kyu
Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a-b);
  return (numbers[0] + numbers[1]);
};
//console.log(sumTwoSmallestNumbers([33, 44, 11, 1]), "two smallest numbers");

//with a for loop, faster for larger arrays:

function forSumTwoSmallestNumbers(numbers) {  
  let smallest = Infinity;
  let secondSmallest = Infinity;
  
  for (let i of numbers) {
  	if(i < smallest) {
    	secondSmallest = smallest;
      smallest = i;
    } else if( i < secondSmallest ) {
    	secondSmallest = i;
    }
  }
  
  return smallest + secondSmallest;
}
//(console.log(forSumTwoSmallestNumbers([5, 8, 12, 19, 22]));



function grow(x){
  let result = x[0];
  for(let i = 1; i < x.length; i++){
    result *= x[i]; 
    console.log(i)
    console.log(result);
  }
  return result;
}

grow([1, 2, 3]);

function grow(x){
  return x.reduce((acc, crr) => acc*crr );
 }


/*  7 kyu+++++++++++++++++++
Get the Middle Character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
 */

const getMiddle = word => {

  const middleChar = (Math.floor((word.length-1) / 2));
 
  return word.length % 2 === 1 ? word.slice(middleChar, middleChar + 1) : word.slice(middleChar, middleChar + 2);
}

console.log(getMiddle("testing"));

let object = {
  Maja: {
    Luka: {
      Maks: 3,
    }
  }
}

console.log(object.Maja.Luka["Maks"])



//najdi soglasnike v določenemu stringu. 


function consonantCount(str) {
  const consonants = ["a", "e", "i", "o", "u"];

  const charCodesArray = Array.from(Array(26), (_, i) => i + 97); //creates an array of ASCII codes for alphabet characters (97 to 122) - lahko bi tudi direktno "napisal" soglasnike
  const alphabetArray = charCodesArray.map( num => String.fromCharCode(num)); //fills with actual letters

  const charArrayFromStr = str.toLowerCase().split("");

  const consonantArray = charArrayFromStr.filter(char =>alphabetArray.includes(char) && !consonants.includes(char));
  return consonantArray.length;
}


/* 8 kyu
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"    */                // Non-alphabetical characters are unaffected
/* "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE" */


//Normal function: 

function toAlternatingCase(string) {
  
  const arrayOfLetters = [];
  
  const lettersArray = string.split("");

  console.log(lettersArray);
  
  for(let i = 0; i < lettersArray.length; i++) {
    if(lettersArray[i] === lettersArray[i].toUpperCase()) {
      arrayOfLetters.push(lettersArray[i].toLowerCase());
    } else {
      arrayOfLetters.push(lettersArray[i].toUpperCase());
    }
  };
  
  return arrayOfLetters.join("");
  
}

console.log(toAlternatingCase("catCat"));


//as a method of the String object:

String.prototype.toAlternatingCase = function () {
  
  const arrayOfLetters = [];
  
  const lettersArray = this.split("");  //moraš uporabiti this , ker gre metodo objekta String
  
  for(let i = 0; i < lettersArray.length; i++) {
    if(lettersArray[i] === lettersArray[i].toUpperCase()) {
      arrayOfLetters.push(lettersArray[i].toLowerCase());
    } else {
      arrayOfLetters.push(lettersArray[i].toUpperCase());
    }
  };
  
  return arrayOfLetters.join("");
  
}

console.log("RACEcar".toAlternatingCase());

// CW, shorter:

String.prototype.toAlternatingCaseCW = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


/* 7 kyu
Sorting Arrays
Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.
Example 1

a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

Example 2

a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

Each element in the arrays will start with a unique letter so there will only be a single match for each element. */


//fist solution:

function sortArray(a1, a2) {
  
  const sortedArray = [];

  for(let e1 of a1) {
    for(let  e2 of a2) {
      if(e1[0] === e2[0]){
        sortedArray.push(e2)
      }
    }
  }
  return sortedArray;
}

//second solution with better time complexity:


function sortArray(a1, a2) {
  return a1.map(e1 => a2.find(e2 => e1[0] === e2[0]));
}


/* 6 kyu
Equal Sides Of An Array
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
 */


function findEvenIndex(arr){
  return arr.findIndex((_,index, ar) => {
   return (ar.slice(index + 1).reduce((acc, crr) => acc + crr, 0)) === //sums the numbers from index + 1 (1,2,3...) to last the last number.
     (ar.slice(0, index).reduce((acc, crr) => acc + crr, 0));  //sums the numbers from index 0 to (not including) index
  })
}

//first try!

//refactored, is a bit more understandable I think

function findEvenIndex(arr){
  const arraySum = (array, fromIndex, toIndex) => array.slice(fromIndex, toIndex).reduce((a,b) => a + b, 0);
  return arr.findIndex((_,index, ar) => {
    return arraySum(ar, index + 1) === arraySum(ar, 0, index);
  });
};

console.log(findEvenIndex([1,2,3,4,3,2,1]))


/* 7 kyu
How many are smaller than me?
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II? */

function smaller1(nums) {
  return nums.map((num,i) => nums.slice(i+1).filter( ele => ele < num).length);
}

//OR, better solution, just uses the filter method:

function smaller2(nums) {
  return nums.map((num,i) => nums.filter((ele, ind) => ele < num && ind > i).length);
}

//console.log(smaller1([5, 4, 3, 2, 1, -10]));


/* 7 kyu
Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

function disemvowel1(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const stringArray = str.split("");
  
  for(let i = 0; i < stringArray.length; i++) {
     if(vowels.includes(stringArray[i])) {
      stringArray.splice(i, 1);  //removes the vowels
       i--;   //when we delete an element, the array shifts to the left, so we have to adjust the index accordingly
    }                    
  };
   
  return stringArray.join("");
}

//OR just use a filter mehod (dohh):

function disemvowel2(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str.split("")
  .filter(letter => !vowels.includes(letter))
  .join("");
}

//with less typing:

function disemvowel3(str) {
  const vowels = 'aeiou';
  return str
    .split("")
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join("");
}

/* 
7 kyu
Fun with ES6 Classes #2 - Animals and Inheritance

Overview

Preloaded for you in this Kata is a class Animal:

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

Task

Define the following classes that inherit from Animal.
I. Shark

The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".
II. Cat

The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important

III. Dog

The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master). */


class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);  //super mora imeti enako število argumentov kot parent class constructor!
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`; //
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
    greetMaster() {
      return `Hello ${this.master}`;
    }
}

/* "So, in summary, the number of arguments in the subclass constructor can differ from the number of arguments in the parent class constructor. However, when calling super() inside the subclass constructor, you need to pass the appropriate number of arguments expected by the parent class constructor to ensure proper initialization of all properties in the instance of the parent class." */


/* 8 kyu
Basic Mathematical Operations
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

function basicOp(operation, a, b) {
  const operationS = {
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => a / b,
  }
  
  return operationS[operation](a,b); //mora biti (a,b) prisoten, da passaš in argumente/vrednosti.
};


console.log(basicOp("*", 9, 3));


function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(sheep => sheep).length;
}

let sheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

  console.log(countSheeps(sheep));

  function removeSmallest(numbers) {
    return numbers.filter((e,i,arr) =>
          i !== arr.findIndex((e,i,arr) => e === Math.min(...arr)));
  }

/*   7 kyu
  Remove the minimum
  The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

function removeSmallest234(numbers) {
  const indexOfMinimum = numbers.findIndex(e => e === Math.min(...numbers));  //so that it is only calculated once
  return numbers.filter((_,i) => i !== indexOfMinimum );
};

//OR:

/* function removeSmallest(numbers) {
  return numbers.filter((_,i,arr) =>
        i !== arr.findIndex((e,_,arr) => e === Math.min(...arr)));
} */


//CW solution using slice:

function removeSmallest345(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}




/* 7 kyu
Suzuki needs help lining up his students!

Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

You will be given a string of student names. Sort them and return a list of names in descending order.

Here is an example input:

string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'

Here is an example return from your function:

 lst = ['Takehiko',
        'Takayuki',
        'Takahiro',
        'Takeshi',
        'Takeshi',
        'Takashi',
        'Tadashi',
        'Takeo',
        'Takao']

Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

string = "xxa xxb xxc xxd xa xb xc xd"

Returns

['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa'] */


string33 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'

function lineupStudents(students){
  const sortedByLength = students.split(" ").sort((stu1, stu2) => (stu2.length - stu1.length));
  const sortedArray = [];
  let startIndex = 0;

  const sortStringsReverse = (a,b) => {
    if( a > b) return -1
    else if (a < b) return 1
    else return 0;
  }

  for(let i = 1; i < sortedByLength.length; i++) {
    if(sortedByLength[i].length < sortedByLength[i - 1].length) {
     sortedArray.push(sortedByLength.slice(startIndex, i).sort(sortStringsReverse));
     startIndex = i;
    }
  }
   // Push the remaining students into sortedArray
   sortedArray.push(sortedByLength.slice(startIndex).sort(sortStringsReverse));

  return sortedArray.flat();
}


// !!!!! namesto vse te dolge kode bi lahko enostavno napisal:

//.sort((a, b) => b.length - a.length || b.localeCompare(a)); //če so besede enake dolžine je razlika 0 in se uporabi za razvrščanje localeCompare


console.table(lineupStudents(string33));


/* 7 kyu
Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case. */

function getDivisorsCnt(n){
  let numOfDivisors = 0;
  const squareRootOfNum = Math.sqrt(n);

for(let i = 1; i <= squareRootOfNum; i++) {
  if(n % i === 0) {
    numOfDivisors += 2;
  }
}

if(squareRootOfNum % 1 === 0) {  //dont count twice, if it's aperfect square
  numOfDivisors--;
}

return numOfDivisors;
}

//square root property/theorem : each divisor of n that is smaller than sqrt of n, has one pair divisor that is larger than sqrt of n



//++++++++++++++++Reuturn an array of indexes of capital letters in a word:

var capitals = function (word) {
	const  wordArray = word.split("");
  const indexesOfCapitalLettersArr = [];
  for(let i in wordArray) {
    if(wordArray[i] === wordArray[i].toUpperCase()) {
      indexesOfCapitalLettersArr.push(+i);
    }
  }
  return indexesOfCapitalLettersArr;
};

var capitals2 = function (word) {
	const  wordArray = word.split(""); //you dont need to split.
  const indexesOfCapitalLettersArr = [];
  for(let i = 0; i < wordArray.length; i++) {
    if(wordArray[i] === wordArray[i].toUpperCase()) {
      indexesOfCapitalLettersArr.push(i)
    }
  }
  return indexesOfCapitalLettersArr;
};

//better:

var capitals3 = function (word) {
  const indexesOfCapitalLettersArr = [];
  for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()) {
      indexesOfCapitalLettersArr.push(i)
    }
  }
  return indexesOfCapitalLettersArr;
};

//sexiest:

const capitals4 = function(word) {
  const wordArray = word.split("");
  return wordArray.reduce((acc, crr, ind) => {
    if (crr === crr.toUpperCase()) {
      acc.push(ind);
    };
    return acc;
  }, []);
}

console.log(capitals4('CodEWaRS'));


/* 8 kyu
Remove String Spaces
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
 */

//simple:

function noSpace(x){
  const stringArray = x.split(" ");
  const arrayZeroSpaces = [];
  for(let e of stringArray) {
    if(e) {
      arrayZeroSpaces.push(e);
    };
  }
  return arrayZeroSpaces.join("");
}

//with reduce:

function noSpace(x) {
  const stringArray = x.split(" ");
  return stringArray.reduce((acc, crr) => {
    return crr ? acc.concat(crr) : acc
  }, [] )
  .join("");
}


//the simplest solution:

function noSpace(x){return x.split(' ').join('')}

//join doesnt include the empty strings produced by split!

console.log(noSpace(" aa aa b   ss ss  "))


//+++++ Create a function that takes a string and returns an array of character that are unique in order ("AACCCS" => [A, C, S])


const  uniqueInOrder=function(iterable){
  
  let iterableArray;
  
  typeof iterable === "string" ? iterableArray = iterable.split("") : iterableArray = iterable;
  
  for(let i = 0; i < iterableArray.length; i++) {
    if(iterableArray[i] === iterableArray[i+1]) {
      iterableArray.splice(i+1, 1);
      i--;
    } 
   }
    return iterableArray;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));


/* +++++++7 kyu
You're a square!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

const isSquare1 = function(n){
  return Math.sqrt(n) % 1 === 0 ? true : false;
};

//you dont need the explicit true : false:

const isSquare2 = function(n){
  return Math.sqrt(n) % 1 === 0 
};



/* 8 kyu
What is between?
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them. */

function between(a, b) {

  const numArray = [];
  
  for(let i = a; i <= b; i++) {
    numArray.push(i);
  }
  
  return numArray;

}

//also works:

const between2 = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);


/* 7 kyu
Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) { 
  const counterObj = { x: 0, o: 0};
  
  for( let e of str.toLowerCase()) {
    if (e === "o" || e === "x") {
      counterObj[e]++;
    }
  }
  return counterObj.x === counterObj.o;
};


//simpler:


function XO(str) {
  let numOfXs = 0;
  let numOfOs = 0;

  for(let e of str.toLowerCase()) {
    if(e === "x") numOfXs++
    else if (e === "o") numOfOs++
  }

  return numOfOs === numOfXs;
}


/* 6 kyu
Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1) */

function solution(number){
  if(number <= 2) return 0;

  const multiplesArray = [];
  for(let i = 3; i < number; i++) {
    if( i % 3 === 0) {
      multiplesArray.push(i);
    } else if (i % 5 === 0) {
      multiplesArray.push(i)
    };
  };
  return multiplesArray.reduce((acc, crr) => acc + crr, 0);
};

//simpler:

function solution(number){
  if(number <= 2) return 0;

  let numSolution = 0;
  for(let i = 3; i < number; i++) {
    if( i % 3 === 0) {
      numSolution += i;
    } else if (i % 5 === 0) {
      numSolution += i;
    };
  };
  return numSolution;
};

//or just:

function solution(number){
  if(number <= 2) return 0;

  let numSolution = 0;
  for(let i = 3; i < number; i++) {
    if( i % 3 === 0 || i % 5 === 0) {
      numSolution += i;
    };
  };
  return numSolution;
};
