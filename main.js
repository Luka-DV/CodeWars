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


/* 8 kyu
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name){

  const nameArray = name.split(" ");
  return `${nameArray[0][0].toUpperCase()}.${nameArray[1][0].toUpperCase()}`;

}

/* 8 kyu
Return Negative
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */


function makeNegative(num) {
  return num <= 0 ? num : -num;
}


/* 7 kyu
Jaden Casing Strings
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */


String.prototype.toJadenCase = function () {
  
  const stringToArray = this.split(" ");
  const jadenArray = [];
  for(let e of stringToArray) {
   jadenArray.push(e.replace(e[0], e[0].toUpperCase()));
  }
  return jadenArray.join(" ");
};

//or, more elegant: 

String.prototype.toJadenCase = function () {
 
  return this.split(" ")
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ");
};

/* ++++++++++6 kyu
Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */


function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num));
};


/* +++++++++++++6 kyu
Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

function findUniq(arr) {
  let counterObj = [];
   for(let e of arr) {
     counterObj[e] = (counterObj[e] || 0) + 1;
   };
   for(let e in counterObj) {
     if (counterObj[e] === 1) {
       return +e;
     };
   };
 }

 console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));


 //OR using reduce:

 function findUniq2(arr) {
  
  const counterObj = arr.reduce((acc, crr) => {
    acc[crr] = (acc[crr] || 0) + 1;
    return acc
  }, []);

   for(let e in counterObj) {
     if (counterObj[e] === 1) {
       return +e;
     };
   };
 }

/*  7 kyu
 Complementary DNA
 Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

function DNAStrand(dna){
  const dnaPairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  return dna.split("")
  .map(e => dnaPairs[e])
  .join("");
}

//console.log(DNAStrand("AATAATTCGC"));

/* 6 kyu
Who has the most money?
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

    Each student will have a unique name
    There will always be a clear winner: either one person has the most, or everyone has the same amount
    If there is only one student, then that student has the most money */


    class Student {
      constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
      }
    }

    const andy = new Student("Andy", 0, 0, 2);
    const stephen = new Student("Stephen", 0, 4, 0);
    const eric = new Student("Eric", 8, 1, 0);
    const david = new Student("David", 2, 0, 1);
    const phil = new Student("Phil", 0, 2, 1);
    const cam = new Student("Cameron", 2, 2, 0);
    const geoff = new Student("Geoff", 0, 3, 0);

    function mostMoney(students) {
      if (students.length === 1){
      return students[0].name
        };
    
      const moneyArray = students.map(e => e.fives*5 + e.tens*10 + e.twenties*20);
      if (Math.max(...moneyArray) === Math.min(...moneyArray)) {
        return "all"
      } else {
        return students[moneyArray.findIndex(e => e === Math.max(...moneyArray))].name
      }
  }

    console.log(mostMoney([david, cam, geoff]));


    //a nice CW solution:

  /*   const mostMoney = students => {
      let money = students.map(st => st.fives * 5 + st.tens * 10 + st.twenties * 20);

      if (money.length > 1 && money.every(val => val == money[0])){
        return 'all';
      } 

      let idx = money.indexOf(Math.max(...money));
      return students[idx].name;
    } */



/*     6 kyu
Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

 */

function solution(string) {
  return string.split("")
  .map(e => e === e.toUpperCase() ? ` ${e}`: e)
  .join("")
}

/* ++++++++++++8 kyu
A Needle in the Haystack
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

Note: In COBOL, it should return "found the needle at position 6" */

function findNeedle(haystack) {
  const needlePosition = haystack.indexOf("needle");
  return `found the needle at position ${needlePosition}`;
}

/*+++++++++++++++++++7 kyu
Don't give me five!

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative! */

function dontGiveMeFive(start, end) {
  
  let numCount = 0;
  for(let i = start; i <= end; i++) {
    if(String(i).includes("5")) continue;  //or if(!String(i).includes("5"))
    numCount++;
  }
  return numCount;
}

console.log(dontGiveMeFive(4,17))

/* 6 kyu
Sort the odd
Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
  const sortedOddNumArr = array.filter(e => e % 2 === 1 ).sort();
  let i = -1;
  return array.map(e => {
    if(e % 2 === 1) {
      i++;
      return sortedOddNumArr[i];
    }
    return e;
  })
};


//smart CW solution:

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}



console.log(sortArray([5, 8, 7, 6, 3, 4] ));

/* 8 kyu
Add Length
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */

function addLength(str) {
  return str.split(" ").map(e => `${e} ${e.length}`);
}

/* 7 kyu
Mumbling
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
	return s.split("")
    .map((e, ind) => e.toUpperCase() + e.toLowerCase().repeat(ind))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));


/* 7 kyu
Find the middle element
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. */

function gimme (triplet) {
  const minNum = Math.min(...triplet);
  const maxNum = Math.max(...triplet);
  return triplet.findIndex(e => e !== minNum && e !== maxNum);
}

//Or:

function gimme (triplet) {
  return triplet.indexOf(triplet.slice().sort((a,b) => a-b)[1]);
}


console.log(gimme([2,3,1]));


/* 8 kyu
Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about tha */

function removeEveryOther(arr){
  return arr.filter((_,ind) => ind % 2 === 0);
}

/* 7 kyu
Binary Addition
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary */

function addBinary(a,b) {

  return (a + b).toString(2);
}


/* ++++++++++++++8 kyu
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
 */


/* class Ghost {
  constructor() {
    this.color = (
      function() {
        const randomNum = Math.random();
        if(randomNum < 0.25) return "white"
        else if(randomNum < 0.50) return "yellow"
        else if(randomNum < 0.75) return "purple"
        else return "red"
      }
    )()
  }
}


//using abstraction:

function Ghost() {
  
  const colorPicker =  function() {
    const randomNum = Math.random();
    if(randomNum < 0.25) return "white"
    else if(randomNum < 0.50) return "yellow"
    else if(randomNum < 0.75) return "purple"
    else return "red"
  }

  const color = colorPicker();

 Object.defineProperty(this, "color", {
  get: function() {
    return color;
  }
 })
} */


//modern (best), using private fields (#) to achieve abstraciton :

/* class Ghost {
 #color;
 constructor() {
    const colorPicker =  function() {
      const randomNum = Math.random();
      if(randomNum < 0.25) return "white"
      else if(randomNum < 0.50) return "yellow"
      else if(randomNum < 0.75) return "purple"
      else return "red"
    };

    this.#color = colorPicker()
 }

 get color() {
  return this.#color
 }
} */


//using classes but without privat fields (codewars doesnt support them yes):

class Ghost {
  constructor() {
    
    const colorPicker =  function() {
       const randomNum = Math.random();
       if(randomNum < 0.25) return "white"
       else if(randomNum < 0.50) return "yellow"
       else if(randomNum < 0.75) return "purple"
       else return "red"
     };
 
    let color = colorPicker();

    Object.defineProperty(this, "color", {
      get: function() {
        return color;
      }
    })
  }
 }


const ghost1 = new Ghost();
const ghost2 = new Ghost();
const ghost3 = new Ghost();

console.log(ghost1, ghost2, ghost3);

/* 8 kyu
OOP: Object Oriented Piracy
Ahoy matey!

You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!
Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?
You begin with writing a generic Ship class / struct:
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}
Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

    draft - an estimate of the ship's weight based on how low it is in the water
    crew - the count of crew on board

var titanic = new Ship(15, 10);

Task
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method
isWorthIt
to decide if the ship is worthy to loot. For example:
titanic.isWorthIt() // return false
Good luck and may you find GOOOLD! */

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
 }
 
 Ship.prototype.isWorthIt = function() {
   return this.draft - (this.crew*1.5) > 20 ? true : false;
 }

/* +++++++++++++++++++++ 7 kyu
Selective fear of numbers
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean) */


//You could write normal if...else statements, but this is a more elegant solution (using an object):

function AmIAfraid(day, num) {
  
  const dayNumberCondition = {
    "Monday": num === 12,
    "Tuesday": num > 95,
    "Wednesday": num === 34,
    "Thursday": num === 0,
    "Friday": num % 2 === 0,
    "Saturday": num === 56,
    "Sunday": num === 666 || num === -666
  }
  
  return dayNumberCondition[day];
}

//other CW solutions:

//1:

var AmIAfraid = function(day, num) {
  var preds = {"Sunday":    d => d == 666 || d == -666,
               "Monday":    d => d == 12,
               "Tuesday":   d => d > 95,
               "Wednesday": d => d == 34,
               "Thursday":  d => d === 0,
               "Friday":    d => d % 2 === 0,
               "Saturday":  d => d == 56};
  return preds[day](num);
}

//2:

function AmIAfraid(day, num) {
  return {
    "Monday"   : num === 12,
    "Tuesday"  : num > 95,
    "Wednesday": num === 34,
    "Thursday" : num === 0,
    "Friday"   : num % 2 === 0,
    "Saturday" : num === 56,
    "Sunday"   : Math.abs(num) === 666
  }[day];
}

/* 8 kyu
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  " */

function doubleChar(str) {
  return str.split("")
        .map(e => e.repeat(2))
        .join("");
}

//without repeating the whitespace:

function doubleChar(str) {
  return str.split("")
        .map(e => e != " " ? e.repeat(2) : e)
        .join("");
}

console.log(doubleChar("ABC ABC"));

/* 6 kyu
Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */


/* function order(words){
  const wordsArray = words.split(" ");
  const counterObj = {};
  const orderedArray = [];
  
  for(let e of wordsArray) {
    let letterArray = e.split("");
    for(let el of letterArray) {
      console.log(el)
      if(!isNaN(el)) {
        counterObj[el] = e;
        break
      }
    }
  }
  
  for(let i in counterObj) {
    orderedArray.push(counterObj[i])
  }
  
  return orderedArray.join(" ")
} */


function order(words){
  const wordsArray = words.split(" ");
  const orderedArray = [];

  if(!words) return words;
  
  for(let word of wordsArray) {
    let letterArray = word.split("");
    for(let char of letterArray) {
      if(!isNaN(char)) {
        orderedArray[+char-1] = word;
        break
      }
    }
  }
  return orderedArray.join(" ")
}
console.log(order("is2 Thi1s T4est 3a"), "huheh");


/* 
+++++++++++7 kyu
Sort Number
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return [] */

function solution23(nums){

  if(!nums || nums.length === 0 ) return [];
  
  return nums.sort((a,b) => a - b);
}

//CW:

function solution233(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}




//fibonacci practice

//Given a number n, find the first n elements of the fibonacci sequence

function fibonacci(n) {
  const fibonacciArray = [0,1];

  if(n === 1) return [0];

  for(let i = 2; i <= n - 1; i++) {
    fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1])
  }

  return fibonacciArray;
}

console.log(fibonacci(7))


//function that gives the value at index N using recursion:

function fibonacciNumAtIndexN(n) {
  if (n <= 1) return n;
  return fibonacciNumAtIndexN (n - 2) + fibonacciNumAtIndexN (n - 1);
}

console.log(fibonacciNumAtIndexN(6))



//6kyu kata
//Given an input:

//"?foo=hello&bar=world&baz&foo=again"

/* output an object like this:

output: {
  foo: ["hello", "again"]
  bar: "world",
  baz: "true"
} */


function formatQueryString(str) {

  const keyValuePairs = str.slice(1).split("&");

  const output = {};

  for (let pair of keyValuePairs) {
    const [key,value] = pair.split("=")
    if(key) output[key] = value ?? "true";
  }

  return output;
}

console.log(formatQueryString("?foo=hello&bar=world&baz&foo=again"));

/* 
function formatQueryString(str) {

  const keyValuePairs = str.slice(1).split("&");

  const output = {};

  for (let pair of keyValuePairs) {
    const [key,value] = pair.split("=")
    if(key) {
      if(typeof output[key] === "object") {
        output[key].push(value)
      } else if(output[key] )output[key] = [output[key], value]
     else  output[key] = value ?? "true";
    }
  }

  return output;
} */


function formatQueryString(str) {

  if(str === null || str === undefined) {
    throw new Error("No input given.")
  }
  const keyValuePairs = str.slice(1).split("&");

  const output = {};

  for (let pair of keyValuePairs) {
    const [key,value] = pair.split("=")
    if(key) { //checks that the input is not empty (if "?" reuturns an empty object)
      if(output[key]) { //checks if the given key allready has a value
        typeof output[key] === "object" ? output[key].push(value) : output[key] = [output[key], value] //array: push value, not array: create array
      }
     else  output[key] = value ?? "true";
    }
  }
  return output;
}


function formatQueryString(str) {

  if(str === null || str === undefined) {
    throw new Error("No input given.")
  }
  const keyValuePairs = str.slice(1).split("&");

  const output = {};

  for (let pair of keyValuePairs) {
    const [key,value] = pair.split("=")
    if(key) { //checks that the input is not empty (if "?" returns an empty object)
      if(output[key]) { //checks if the given key allready has a value
        output[key] = [output[key], value ?? "true"].flat() //better, less verbose code
      }
     else  output[key] = value ?? "true";
    }
  }
  return output;
}

console.log(formatQueryString("?foo=hello&bar=world&?=javascript&foo=again&bar=again&baz4&foo"), "to OBJECT");



//now code the reverse problem (from object to query string)

function fromObjectToQueryString(obj) {

  const queryStringArray = [];

  for(let key in obj) {
    if(typeof obj[key] === "object") { //check if array
      for(let i of obj[key]) {
        queryStringArray.push(`&${key}${i === "true" ? "": "="+ i }`);
      }
    } else {
      queryStringArray.push(`&${key}${obj[key] === "true" ? "": "=" + obj[key]}`);
    }
  }
  //return `?${queryStringArray.join("").slice(1)}` OR:
  return "?" + queryStringArray.join("").slice(1)

}


const object1 = {
  foo: ["hello", "again", "true"],
  bar: "world",
  baz: "true"
} 

console.log(fromObjectToQueryString(object1));

/* const queryObject = formatQueryString("?foo=hello&bar=world&baz=javascript&foo=again&bar=again&baz4&foo")
console.log("format to object= ", queryObject)

const backToQuery = fromObjectToQueryString(queryObject);
console.log("format back to string= ", backToQuery, typeof backToQuery); */


//with a clear function for the "true" value:

function fromObjectToQueryString2(obj) {

  const queryStringArray = [];

  function clearTrue(value) {
    return value === "true" ? "": "=" + value
  }

  for(let key in obj) {
    if(typeof obj[key] === "object") { 
      for(let i of obj[key]) {
        queryStringArray.push(`&${key}${clearTrue(i)}`);
      }
    } else {
      queryStringArray.push(`&${key}${clearTrue(obj[key])}`);
    }
  }
  
  return "?" + queryStringArray.join("").slice(1)
}


console.log(fromObjectToQueryString2(object1));



//with decoding:

function formatQueryString33(str) {

  if(str === null || str === undefined) {
    throw new Error("No input given.")
  }
  const keyValuePairs = str.slice(1).split("&"); 

  const output = {};

  for (let pair of keyValuePairs) {
    const [key,value] = pair.split("=").map(decodeURIComponent) // 1. za .split("="), ker so simboli encodani (&, =,...) 2. ko passaš funkcijo v map ne uporabiš (): je enako kot map(e => decodeURIComponent(e))
    if(key) { //checks that the input is not empty (if "?" returns an empty object)
      if(output[key]) { //checks if the given key allready has a value
        output[key] = [output[key], value ?? "true"].flat() //better, less verbose code
      }
     else  output[key] = value ?? "true";
    }
  }
  return output;
}

console.log(formatQueryString33("?foo=hello&qmark=%3F&bar=world&baz=javascript&foo=again&bar=again&baz4&foo&qmark=%3F"), "to OBJECT33");



/* 7 kyu
Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

function removeUrlAnchor(url){

  const urlArray = [];
  for(let ch of url) {
    if(ch === "#") break
    urlArray.push(ch);
  }
  return urlArray.join("")
}

//cw, split :

function removeUrlAnchor(url){
  return url.split('#')[0];
}



/* 6 kyu
Two Sum
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0] */


function twoSum(numbers, target) {
  
  for(let i = 0; i < numbers.length; i++) {
    for(let n = i + 1; n < numbers.length; n++) {
      if(numbers[i] + numbers[n] === target) return [i, n]
    }
  }
}

console.log(twoSum([1,2,3], 4))


//cw smart solution using a map (better time complexity O(n) versus O(n^2)):

function twoSum(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i], y = target - x;
    if (seen.has(y))
      return [seen.get(y), i];
    seen.set(x, i);
  }
}


/* 7 kyu
Two Oldest Ages
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10] */

//easiest: 

function twoOldestAges(ages){
  ages.sort((a,b) => a-b)
  return [ages[ages.length-2], ages[ages.length-1]]
}

//better time complexity:


function twoOldestAges(ages) {
  let oldest = -Infinity;
  let secondOldest = -Infinity;

  for (const age of ages) {
    if (age > oldest) {
      secondOldest = oldest;
      oldest = age;
    } else if (age > secondOldest) {
      secondOldest = age;
    }
  }
  return [secondOldest, oldest];
}


console.log(twoOldestAges([1,5,87,45,8,8]))



/* ++++++++++++++++5 kyu
String incrementer

Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

//this works if the numbers are just at the end of the string:

function incrementString (strng) {
  for(let ind in strng) {
    if(!isNaN(+strng[+ind])) {
      const charString = strng.slice(0,+ind)
      const numberString = strng.slice(+ind);

      console.log(numberString)

      let convertedToNum = Number(numberString);

      const incrementedNumberString = String(++convertedToNum);

      return charString + incrementedNumberString.padStart(numberString.length, 0)
    }
  }
  return strng + 1;
}


//works in every case (final solution):


function incrementString (strng) {

  if(!strng) return "1"

  if(!isNaN(strng)) { //if the strng is a number
    return (parseInt(strng, 10) + 1).toString().padStart(strng.length, 0);
  }

  for(let ind = strng.length - 1; ind >= 0; ind--) {
    if(isNaN(strng[ind])) {
      const charString = strng.slice(0,ind+1)
      const numberString = strng.slice(ind+1);

      const incrementedNumberString = String(Number(numberString) + 1);

      return charString + incrementedNumberString.padStart(numberString.length, 0)
    }
  }

}

console.log(incrementString("foo"))


/* 7 kyu
Thinkful - Object Drills: Quarks

Background

You're modelling the interaction between a large number of quarks and have decided to create a Quark class so you can generate your own quark objects.

Quarks are fundamental particles and the only fundamental particle to experience all four fundamental forces.
Your task

Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.
Example

>>> q1 = Quark("red", "up")
>>> q1.color
"red"
>>> q1.flavor
"up"
>>> q2 = Quark("blue", "strange")
>>> q2.color
"blue"
>>> q2.baryon_number
0.3333333333333333
>>> q1.interact(q2)
>>> q1.color
"blue"
>>> q2.color
"red" */

class Quark{
  constructor(quarkColor, quarkFlavor) {
    this.color = quarkColor,
    this.flavor = quarkFlavor,
    this["baryon_number"] = 1/3 
  }
  interact(quark) {
    [this.color, quark.color] = [quark.color, this.color] 
  }
}


const quark1 = new Quark("green", "up");
const quark2 = new Quark("blue", "down")
console.log(quark1, quark2)


/* 7 kyu
Building blocks
Write a class Block that creates a block (Duh..)
Requirements

The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`

Examples

    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2
    
    b.getLength() // -> 4
    
    b.getHeight() // -> 6
    
    b.getVolume() // -> 48
    
    b.getSurfaceArea() // -> 88

Note: no error checking is needed */


class Block2{

  constructor([width, length, height]){
    this.width = width,
    this.length = length,
    this.height = height
  };

  getWidth() {
    return this.width
  }
  getLength() {
    return this.length
  }
  getHeight() {
    return this.height
  }
  getVolume() {
    return this.height*this.length*this.width
  }
  getSurfaceArea() {
    return 2*this.height*this.width + 2*this.height*this.length + 2*this.width*this.length
  }
  
}

//more elegant:

class Block{

  constructor(data){
    [this.width,this.length,this.height] = data;
  };

  getWidth() {
    return this.width
  }
  getLength() {
    return this.length
  }
  getHeight() {
    return this.height
  }
  getVolume() {
    const {height, length, width} = this
    return height*length*width
  }
  getSurfaceArea() {
    const {height, length, width} = this
    return 2*height*width + 2*height*length + 2*width*length
  }
  
}


/* 7 kyu
Small enough? - Beginner
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

function smallEnough(a, limit){
  return a.every(value => value <= limit);
}

/* 7 kyu
No oddities here
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given. */
function noOdds( values ){
  return values.filter(num => num % 2 === 0);
}

/* 7 kyu
Check the exam
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */



function checkExam(array1, array2) {
  let score = 0;
 for(let i = 0; i < array1.length; i++) {
   if(!array2[i]) score += 0;
   else if(array1[i] === array2[i]) score += 4;
   else score -= 1;
 }
  if(score < 0) return 0;
  return score;
}

//using reduce:

const checkExam33 = (array1, array2) => {
  let score = array2.reduce(
    (acc, crr, i) => {
      if(crr == array1[i]) return acc += 4;
      else if(crr == 0) return acc += 0;
      else return acc - 1;
    }
  , 0);
  return score < 0 ? 0 : score;
}

//solution with a Map. Not space efficient (O(n) vs O(1))

function checkExam(array1, array2) {

  let score = 0;
  
  for(let i = 0; i < array1.length; i++) {

    const checkAnswer = new Map([
      [array1[i] === array2[i], 4],
      [array1[i] !== array2[i], -1],
      [!array2[i], 0]
    ])
  
  
    for(let [key, value] of checkAnswer) {
      if(key) score += value
    }
  }
  
  if(score < 0) return 0;
  return score
}



/* ++++++7 kyu
JavaScript Array Filter
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

function getEvenNumbers33(numbersArray){
  return numbersArray.filter(num => num % 2 === 0);
}

/* ++++++++7 kyu
Flatten and sort an array
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well */

function flattenAndSort(array) {
  return array.flat().sort((a,b) => a-b);
}

/* ++++++++7 kyu
Fizz Buzz
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"] */


// Return an array

function fizzbuzz(n) {

  const fizzBuzzArray = [];

  const rules = new Map([
    [3, "Fizz"],
    [5, "Buzz"],
  ]);
  
  for(let i = 1; i <= n; i++) {
    
    let container = "";

    for(let [key,value] of rules) {
      if(i % key === 0) container += value;
      } 
    
    fizzBuzzArray.push(container || i);
    
  }
  
  return fizzBuzzArray;
}


//console.log(fizzbuzz(22))


/* +++++++7 kyu
String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending){
  return str.endsWith(ending);
}

/* ++++7 kyu
Credit Card Mask
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'. */

function maskify(cc) {
  return cc.split("")
   .map((char, ind, arr) => {
    if(ind > arr.length - 5) return char
    else return "#" 
  })
   .join("");
 }

 //better, simpler:

 function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

/* 7 kyu
Friend or Foe?
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */

function friend(friends){
  return friends.filter(name => name.length === 4);
}

/* 7 kyu
Two to One
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2. */

function longest(s1, s2) {
  const newString = s1 + s2;
console.log(newString, "A")
  const stringToArray = newString.split("");
console.log(stringToArray, "B")
  const uniqueCharSet = new Set(stringToArray);
console.log(uniqueCharSet, "C")
  const sortedArray = [...uniqueCharSet].sort();
  console.log(sortedArray, "D")
  return sortedArray.join("");
  
}

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
console.log(longest(a, b));

function longest(s1, s2) {
  const uniqueCharSet = new Set(s1+s2); //argum can be any iterable
console.log(uniqueCharSet, "C2")
  const sortedArray = [...uniqueCharSet].sort();
  console.log(sortedArray, "D2")
  return sortedArray.join("");
  
}

/* +++++++++7 kyu
Number of People in the Bus
There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop. */

const number23 = function(busStops){
  return busStops.reduce( (acc, crr) => {
    return acc + crr[0] - crr[1];
  },0)
}

//or:

const number34 = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

/* 8 kyu
Fun with ES6 Classes #1 - People, people, people
Fun with ES6 Classes #1 - People, people, people

Time for some OOP fun!

Define a class Person with the following properties:

    A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
    A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
    A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"

You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features. */



class Person {
  constructor(firstName = "John", lastName = "Doe", age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age ?? 0;
    this.gender = gender ?? "Male";
  }
  
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

const sam = new Person();



/* 7 kyu
Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false. */

function validatePIN (pin) {
  const validInput = [1,2,3,4,5,6,7,8,9,0];

  return pin.split("")
  .every(input => validInput.includes(+input) && input !== " ") &&
  (pin.length === 4 || pin.length === 6);
}

//doesnt work if the string includes \n. This works:


function validatePIN(pin) {

  const onlyNums = pin.split('').every(char => typeof +char === "number" 
  && !isNaN(+char) 
  && char !== " "  // number value 0
  && char !== "\n"); // number value 0
 
  return onlyNums && (pin.length === 4 || pin.length === 6)
}

//console.log(validatePIN('-1.234'))

/* 7 kyu
Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */


function stray(numbers) {
  const counterObject = {};
  
  for(let ind = 0; ind < numbers.length; ind++) {
    counterObject[numbers[ind]] = (counterObject[numbers[ind]] || 0) + 1;
    if(ind >= 2) {
      for(let prop in counterObject) {
        if (counterObject[prop] === 1) return +prop;
      }
    }
  }
}

//or - simpler:

function stray(numbers) {
  
  for(let ind = 0; ind < numbers.length; ind++) {
    if(numbers.indexOf(numbers[ind]) === numbers.lastIndexOf(numbers[ind])) {
       return numbers[ind];
       }
  }
}

console.log(stray([2,2,2,2,4]))


/* 7 kyu
Make a function that does arithmetic!
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output) */

function arithmetic(a, b, operator){
  const operatorObject = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b
  };  
  return operatorObject[operator](a,b)
}

//or:
/* 
const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]); */

//or: 

function arithmetic(a, b, operator){
  const operatorObject = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b
  };  
  return operatorObject[operator]
} 

/* +++++7 kyu
Length and two values.

Given an integer n and two other values, build an array of size n filled with these two values alternating. */

function alternate(n, firstValue, secondValue){
  const arrayWithValues = [];
  for(let i = 1; i <= n; i++){
    if(i % 2 === 0) {
      arrayWithValues.push(secondValue)
    } else arrayWithValues.push(firstValue);
  }
  return arrayWithValues
  }

  //or:

  function alternate(n, firstValue, secondValue){
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return array;
  } 

/*   ++++++++++++6 kyu
Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */


function high(x){

  if(!x) return ""

  //create and array of ASCII codes for alphabet characters (97 to 122):

  const charCodesArray = Array.from(Array(26), (_, i) => i + 97)

  //change the array to actual letters:

  const alphabetArray = charCodesArray.map( num => String.fromCharCode(num));

  const referenceObject = {};

  //populate the refernce object:

  for(let i = 0; i < alphabetArray.length; i++) {
    referenceObject[alphabetArray[i]] = i + 1;
  }

  const arrayOfWords = x.split(" ")

  //create an array of [value, word] pairs:

  const valueWordAray =arrayOfWords.map(word => [ word.split("").reduce((acc,crr) => {
    return acc + referenceObject[crr]
  }, 0), word])

  let highestValue = 0;
  let highestValueWord = "";

  //calculate highest value word:

  for(let [value,word] of valueWordAray) {
    if(value > highestValue) {
      highestValue = value;
      highestValueWord = word;
    }
  }

  return highestValueWord;

}


//chat gpt solution:

function high2(x) {
  if (!x) return "";

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // <---this part is usefull 

  const wordScores = x.split(' ').map((word) => {
    const score = word.split('').reduce((acc, char) => {
      return acc + alphabet.indexOf(char) + 1;
    }, 0);
    return { word, score };
  });

  const highestScoringWord = wordScores.reduce((highest, current) => {
    return current.score > highest.score ? current : highest;
  }, { score: 0, word: '' });

  return highestScoringWord.word;
}

//interesting, short solution from CW:

function high3(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}



console.log(high("aaa bbbb iiii"));

/* 6 kyu
Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

function findOdd(A) {
 
  const referenceObject = {};
  
  for(let element of A) {
    referenceObject[element] = (referenceObject[element] ?? 0) + 1;
  }
  
  for(let key in referenceObject) {
    if(referenceObject[key] % 2 === 1) return +key
  }
}


/* 8 kyu
get character from ASCII Value

Write a function which takes a number and returns the corresponding ASCII char for that value. */

function getChar(c){
  return String.fromCharCode(c);
}

/* 6 kyu
Consecutive strings

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
Note

consecutive strings : follow one after another without an interruption */

//code:

function longestConsec(strarr, k) {
  if(strarr.length == 0 || k > strarr.length || k <= 0) return ""

  let longestString = "";

  for(let i = 0; i <= (strarr.length - k); i++) {
    let comparedString = strarr[i];
    let comparisonIndex;
    
    for(let it = 1; it < k; it++ ) {
      comparisonIndex = i + it;
      comparedString += strarr[comparisonIndex];
    }
  
    if(comparedString.length > longestString.length) {
      longestString = comparedString;
    }
  }

  return longestString;
}

//console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))


  //with tests:
  

/* function longestConsec(strarr, k) {
  if(strarr.length == 0 || k > strarr.length || k <= 0) return ""

  let longestString = ""

  for(let i = 0; i <= (strarr.length - k); i++) {
    let comparedString = strarr[i];
    console.log(comparedString, " is : comparedString 1")
    let comparisonIndex;
    for(let it = 1; it < k; it++ ) {
      comparisonIndex = i + it;
      comparedString += strarr[comparisonIndex];
      console.log(comparedString, comparedString.length, "is: comparedString 2")
    }
    console.log("compared string:", comparedString, comparedString.length, " longestString:", longestString, longestString.length )
    if(comparedString.length > longestString.length) {
      longestString = comparedString;
    }
  }

  return longestString;
} */


// CW: smart solution using reduce:

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  
  return strarr.reduce((long, _, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return currString.length > long.length ? currString : long;
  }, '');
}


/* 7 kyu
Combine objects
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together. */


/* const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

function combine(objA, objB) {
  
  const arrayA = Object.entries(objA);
  const arrayB = Object.entries(objB);
  
  const combinedObject = Object.fromEntries(arrayA);

  console.log(combinedObject)
  
} */


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = {a: 100, c: 100, d: 100}



// using the flat method:


function combine1(...args) {

  const combinedArray = args.map(object => Object.entries(object)).flat();

  const combinedObject = combinedArray.reduce((acc, crr) => {
    if(crr[0] in acc) {
      acc[crr[0]] += crr[1];
      return acc
    }
    acc[crr[0]] = crr[1];
    return acc

  }, {})

  return combinedObject
}

//using concat to flatten the array:¸


function combine2(...args) {

  const combinedArray = args.map(object => Object.entries(object));

  const spreadArray = [].concat(...combinedArray);

  const combinedObject = spreadArray.reduce((acc, crr) => {
    if(crr[0] in acc) {
      acc[crr[0]] += crr[1];
      return acc
    }
    acc[crr[0]] = crr[1];
    return acc

  }, {})

  return combinedObject
}


/* 
+++++++++++++7 kyu
Sum of the first nth term of Series
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:

    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

function SeriesSum(n) {  
  let divisor = 1;
  let seriesNum;
  let result = 0;
  
  for(let i = 1; i <= n; i++) {
    
    seriesNum = 1/(divisor);
    result += seriesNum;
    divisor += 3;
    
  }
  
  return result.toFixed(2);
}

//a bit refactored:

function SeriesSum(n) {  
  let divisor = 1;
  let result = 0;
  
  for(let i = 1; i <= n; i++) {
    
    result += 1/(divisor);
    divisor += 3;
  }
  
  return result.toFixed(2);
}



/* 6 kyu
Delete occurrences of an element if it occurs more than n times

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].  */


// First iteration:

function deleteNth1(arr,n){
  
  const referenceObj = {};
  const newList = [];
  
  for(let item of arr) {
    if(referenceObj[item]) {
      if(referenceObj[item] < n) {
        newList.push(item);
        ++referenceObj[item];
      }
    } else {
      newList.push(item);
      referenceObj[item] = 1;
    }
  }
  
  return newList;
}

//OR using reduce:

function deleteNth2(arr,n){
  
  const referenceObj = {};
  
   return arr.filter(item => {
    referenceObj[item] = (referenceObj[item] || 0) + 1;
    return referenceObj[item] <= n;
  })
}


/* ++++++++++8 kyu
Grasshopper - Check for factor
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not. */

function checkForFactor (base, factor) {
  return base % factor === 0;
}


/* +++++++++7 kyu
Sum of a sequence
Your task is to write a function which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4) */

const sequenceSum = (begin, end, step) => {
  let result = 0;
  for(let i = begin; i <= end; i += step) {
    result += i;
  }
  return result;
}


/* +++++++++7 kyu
Grid blast!
The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

var grid = ['top left',    'top middle',    'top right',
            'middle left', 'center',        'middle right',
            'bottom left', 'bottom middle', 'bottom right']

HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

fire(0,0); => 'top left'
fire(1,2); => 'bottom middle' */


function fire(x,y) {
  
  if(x === 1 && x === y) return "center";
 
   const xAxis = {
    0: "left",
    1: "middle",
    2: "right"
  };
  const yAxis = {
    0: "top",
    1: "middle",
    2: "bottom"
  };
  
  return `${yAxis[y]} ${xAxis[x]}`;
}

/* ++++++++7 kyu
Refactored Greeting

The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:

var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe' */


class Person66{
  constructor(myName) {
    this.name = myName;
  }
  
  greet(yourName) {
     return `Hello ${yourName}, my name is ${this.name}`;
  }
}


/* ++++++++++7 kyu
What a "Classy" Song

Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'

You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".
Example

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// These are all new since they are the first listeners.

// day 2
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Luke and Amanda are new, john already listened to it the previous day

Also if the same person listened to it more than once a day it should only count them once. */


class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  
  #allListeners = [];
  
  howMany(listeners) {
    const todaysListenersSet = new Set(listeners.map(listener => listener.toLowerCase())); //create unique listeners array
    const todaysListeners = [...todaysListenersSet];
    
    const newListeners = todaysListeners.filter(listener => !this.#allListeners.includes(listener) ); //filter out known listeners
    
    this.#allListeners.push(...newListeners);
    
    return newListeners.length;
                                            
  }

  get allUniqueListeners() {
    const uniqueListeners = this.#allListeners;
    return `All unique listeners of the song ${this.title} : ${uniqueListeners.join(", ")}.`;
  }
}

/* 
let jelly = new Song("Vse je krasno", "Smolar");

jelly.howMany(["11", "22", "33", "11"]);

jelly.howMany(["11", "33", "55", "99", "11"]);

const marma = new Song ("Jamajka","Domicelj");

marma.howMany(["11","12", "13", "11", "67"]) */



let soemObject = [
  {
    personName: "Marija",
    age: 45,
    occupation: "nurse"
  },
  {
    personName: "Marjan",
    age: 55,
    occupation: "doctor"
  },
  "toti list",
  45
]


let someArr = new Array(...soemObject);

console.log(someArr)


/* +++++++++++++5 kyu
PaginationHelper
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1 */

class PaginationHelper1 {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
    return this.collection.length;
	}
	pageCount() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range

  if (pageIndex < 0 || pageIndex >= this.pageCount()) {
    return -1; // Invalid page index
  }

    const pageArray = [];
    let referenceArray = [...this.collection]
  
    for(let p = 0; p < this.pageCount(); p++) {
      const page = [];
  
      for(let i = 0; i < this.itemsPerPage; i++ ) {
        if(!referenceArray[i]) continue;
        page.push(referenceArray[i]);
      }

      if(p !== this.itemsPerPage - 1) {
        referenceArray = referenceArray.slice(this.itemsPerPage);
      }
    
      pageArray.push(page);
    }
    
    return pageArray[pageIndex].length
	}

	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if(itemIndex > this.collection.length -1 || itemIndex < 0) {
      return -1;
    }

    return (Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1)
    
	}
}

//more elegant, more efficient solution:

class PaginationHelper2 {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
    return this.collection.length;
	}
	pageCount() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
  if (pageIndex < 0 || pageIndex >= this.pageCount()) {
    return -1; // Invalid page index
}

const pageStart = pageIndex * this.itemsPerPage;
const pageEnd = pageStart + this.itemsPerPage;
const itemsOnPage = this.collection.slice(pageStart, pageEnd);
return itemsOnPage.length;

	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if(itemIndex > this.collection.length -1 || itemIndex < 0) {
      return -1;
    }

    return (Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1)
    
	}
}

/* const collection = [1, 2, 3, "h", 5, 6, 7, 8]
const helper = new PaginationHelper(collection, 13) 
console.log(helper.pageItemCount(0), "should be 3")
console.log(helper.pageIndex(1), "shoudl return 0") */



/* +++++++++++7 kyu
Two fighters, one winner.

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.
Example:

  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
 */


//first version:

function declareWinner1(fighter1, fighter2, firstAttacker) {
    
  while(fighter1.health > 0 && fighter2.health > 0) {
    if(firstAttacker === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
      if(fighter2.health <= 0) {
        return fighter1.name
      }
      fighter1.health -= fighter2.damagePerAttack;
       if(fighter1.health <= 0) {
        return fighter2.name
      }
    }
    if(firstAttacker === fighter2.name) {
      fighter1.health -= fighter2.damagePerAttack;
      if(fighter1.health <= 0) {
        return fighter2.name
      }
      fighter2.health -= fighter1.damagePerAttack;
       if(fighter2.health <= 0) {
        return fighter1.name
      }
    }
  }
}

//refactored:

function declareWinner2(fighter1, fighter2, firstAttacker) {
  
  let secondAttacker;
  
  if(fighter1.name === firstAttacker) {
    firstAttacker = fighter1;
    secondAttacker = fighter2;
  } else {
    firstAttacker = fighter2;
    secondAttacker = fighter1;
  }
  
  while(true) { {
      secondAttacker.health -= firstAttacker.damagePerAttack;
      if(secondAttacker.health <= 0) {
        return firstAttacker.name;
        }
      firstAttacker.health -= secondAttacker.damagePerAttack;
       if(firstAttacker.health <= 0) {
        return secondAttacker.name;
      }
    }
  }
}

//smart CW solutions:

// 1.
function declareWinner0(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

// 2.

function declareWinner00(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}



/* 8 kyu
Reversing Words in a String

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi" */


function reverse99(string){
  let withoutSpaces = string.trim();
  return withoutSpaces.split(" ")
        .reverse()
        .join(" ");
}



/* ++++++++++++8 kyu
Replace all vowels to exclamation mark in the sentence */

//using regex:

function replace(s){
  return s.replace(/[aeiou]/ig, "!");
}

//only string/array methods:

function replace(s){
  const vowels = "aeiouAEIOU";
  return s.split("").map(char => {
    if(vowels.includes(char)) {
      return "!"
    }
    return char;
  } )
  .join("");
}


/* 7 kyu
Sum of Minimums!
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values. */

function sumOfMinimums(arr) {
  return arr.reduce((acc, crr) => {
    return acc + Math.min(...crr);
  },0)
};

//the fastest way to find the max value of an array is actually using a normal for loop.



/* 7 kyu
Convert an array of strings to array of numbers
Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
 */

function toNumberArray1(stringarray){
  return stringarray.map(string => Number(string));
}

//or:

function toNumberArray2(stringarray)
{
  return stringarray.map(parseFloat);
}


/* 7 kyu
Divide and Conquer
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number. */

function divCon(x){
  return x.reduce((acc,crr) => {
    return acc + (typeof crr === "string" ? -crr : crr)
  }, 0);
}

/* 7 kyu
Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe */

function countDevelopers1(list) {
  return list.reduce((acc, crr) => {
    return acc + (crr.continent === "Europe" && crr.language === "JavaScript" ? 1 : 0);
  }, 0);
}

// OR:

function countDevelopers2(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}



/* 7 kyu
Coding Meetup #2 - Higher-Order Functions Series - Greet developers

You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >? */

function greetDevelopers1(list) {
  return list.map(person => {
    person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`;
    return person;
  })
}

//OR:

function greetDevelopers2(list) {
  list.forEach(function(developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });
  
  return list;
}


/* 7 kyu
Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

    true if at least one Ruby developer has signed up; or
    false if there will be no Ruby developers. */

    function isRubyComing(list) {
      return list.some( person => person.language === "Ruby");
    }


/* +++++++++ 7 kyu
Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up. */

function getFirstPython(list) {
  const firstPythonDev = list.find(person => person.language === "Python");
  return firstPythonDev ? `${firstPythonDev.firstName}, ${firstPythonDev.country}` : "There will be no Python developers";
};

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Luke', lastName: 'T.', country: 'England', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' }
];

console.log(getFirstPython(list1))

/* ++++++++ 7 kyu
Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup. */

function countLanguages(list) {
  return list.reduce((acc, crr) => {
    acc[crr.language] = (acc[crr.language] || 0) + 1;
    return acc;
  }, {});
}

/* ++++++++7 kyu
Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise. */

  function isSameLanguage(list) {
    const language = list[0].language
    return list.every(person => person.language === language);
  }


/* +++++++6 kyu
Sort My Animals

Consider the following class:

var Animal = { 
  name: "Cat", 
  numberOfLegs: 4 
}

Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back. */

function sortAnimal01(animals) {
  if(!animals.length) return [];
  
  return [...animals].sort((a,b) => {
    if(a.numberOfLegs < b.numberOfLegs) return -1; //sort by legs first
    else if (a.numberOfLegs > b.numberOfLegs) return 1;
    
    if(a.name < b.name) return -1; //if number of legs ==, sort by name
    else if(a.name > b.name) return 1;
  });
}

//smart CW solution:

const compareAnimals02 = (a, b) =>
  a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
  
const sortAnimal = animals =>
  animals ? animals.slice().sort(compareAnimals02) : nullgit


/*   +++++++++++6 kyu
Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
For example, given the following input array:
var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:
    The input array will always be valid and formatted as in the example above and will never be empty. */



function findSenior(list) {

  return list.filter(developer => developer.age === Math.max(...list.map(dev => dev.age)));
}



/* 6 kyu
Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

    true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
    false otherwise.

For example, given the following input array:
var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:
    The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'. */


function allContinents1(list) {
  const arrayOfContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  const mapOfDevContinents = new Set(list.map(dev => dev.continent));
  
  return arrayOfContinents.length === mapOfDevContinents.size;
}


//OR using every and some methods combined:

function allContinents2(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
}


/* ++++++++++6 kyu
Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

    true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
    false otherwise.

For example, given the following input array:
...
your function should return true as there is at least one developer from each age group.

Notes:

    The input array will always be valid and formatted as in the example above.
    Age is represented by a number which can be any positive integer up to 199. */



function isAgeDiverse(list) {
  let referenceMap = new Map ([
      ["teens", null],
      ["twenties", null],
      ["thirties", null],
      ["forties", null],
      ["fifties", null],
      ["sixties", null],
      ["seventies", null],
      ["eighties", null],
      ["nineties", null],
      ["centenarian", null]
  ]);

  for(let person of list) {
    if(person.age >=10 && person.age < 20) {
      referenceMap.set("teens", true);
    } else if(person.age >=20 && person.age < 30) {
      referenceMap.set("twenties", true);
    } else if(person.age >=30 && person.age < 40) {
      referenceMap.set("thirties", true);
    } else if(person.age >=40 && person.age < 50) {
      referenceMap.set("forties", true);
    } else if(person.age >=50 && person.age < 60) {
      referenceMap.set("fifties", true);
    } else if(person.age >=60 && person.age < 70) {
      referenceMap.set("sixties", true);
    } else if(person.age >=70 && person.age < 80) {
      referenceMap.set("seventies", true);
    } else if(person.age >=80 && person.age < 90) {
      referenceMap.set("eighties", true);
    } else if(person.age >=90 && person.age < 100) {
      referenceMap.set("nineties", true);
    } else if (person.age >=100){
      referenceMap.set("centenarian", true);
    }
  }

  console.log(referenceMap.size)
  
  for(let ageGroup of referenceMap) {
    if(ageGroup[1] === null) {
      return false
    }
  }
  return true;
}


//second version:

function isAgeDiverse2(list) {
  let referenceMap = new Map ([]);

  for(let person of list) {
    if(person.age >=10 && person.age < 20) {
      referenceMap.set("teens", true);
      if(referenceMap.size === 10) {
        return true;
      }
    } 
    else if(person.age >=20 && person.age < 30) {
      referenceMap.set("twenties", true);
       if(referenceMap.size === 10) {
        return true;
      };
    } 
    else if(person.age >=30 && person.age < 40) {
      referenceMap.set("thirties", true);
       if(referenceMap.size === 10) {
        return true;
      }
    } 
    else if(person.age >=40 && person.age < 50) {
      referenceMap.set("forties", true);
       if(referenceMap.size === 10) {
        return true;
      };
    } 
    else if(person.age >=50 && person.age < 60) {
      referenceMap.set("fifties", true);
       if(referenceMap.size === 10) {
        return true;
      }
    } 
    else if(person.age >=60 && person.age < 70) {
      referenceMap.set("sixties", true);
       if(referenceMap.size === 10) {
        return true;
      }
    } 
    else if(person.age >=70 && person.age < 80) {
      referenceMap.set("seventies", true);
       if(referenceMap.size === 10) {
        return true;
      };
    }
    else if(person.age >=80 && person.age < 90) {
      referenceMap.set("eighties", true);
       if(referenceMap.size === 10) {
        return true;
      };
    } 
    else if(person.age >=90 && person.age < 100) {
      referenceMap.set("nineties", true);
       if(referenceMap.size === 10) {
        return true;
      }
    } 
    else if (person.age >=100){
      referenceMap.set("centenarian", true);
       if(referenceMap.size === 10) {
        return true;
      }
    }
  }

  return false;
}

//smart chat gpt solution:

function isAgeDiverse3(list) {
  const ageGroups = [
    'teens', 'twenties', 'thirties', 'forties', 'fifties',
    'sixties', 'seventies', 'eighties', 'nineties', 'centenarian'
  ];

  for (const person of list) {
    const ageGroup = getAgeGroup(person.age);
    if (ageGroup !== null) {
      ageGroups.splice(ageGroups.indexOf(ageGroup), 1);
    }
    if (ageGroups.length === 0) {
      return true;
    }
  }

  return false;
}

function getAgeGroup(age) {
  if (age >= 10 && age < 20) return 'teens';
  if (age >= 20 && age < 30) return 'twenties';
  if (age >= 30 && age < 40) return 'thirties';
  if (age >= 40 && age < 50) return 'forties';
  if (age >= 50 && age < 60) return 'fifties';
  if (age >= 60 && age < 70) return 'sixties';
  if (age >= 70 && age < 80) return 'seventies';
  if (age >= 80 && age < 90) return 'eighties';
  if (age >= 90 && age < 100) return 'nineties';
  if (age >= 100) return 'centenarian';
  return null;
}


/* +++++++++++6 kyu
Coding Meetup #10 - Higher-Order Functions Series - Create usernames
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating: firstName in lower-case;
first letter of the lastName in lower-case; and the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020. */

function addUsername(list) {
  return list.map(dev => {
    const devAge = new Date().getFullYear() - dev.age;
    dev.username = `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${devAge}`;
    return dev;
  });
}

/* ++++++++++++7 kyu
Coding Meetup #11 - Higher-Order Functions Series - Find the average age
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Given the following input array:
var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).
Notes:
The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer. */


function getAverageAge0(list) {
  return Math.round(list.reduce((acc, crr) => acc + crr.age, 0)/list.length);
}


/* +++++++++++7 kyu
Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Given the following input array:
var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
Notes:
The original order should be preserved.
If there are no GitHub admin developers in a given language then return an empty array [].
The input array will always be valid and formatted as in the example above.
The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'. */

function findAdmin(list, lang) {
  return list.filter(dev => dev.language === lang && dev.githubAdmin === "yes");
}

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

console.log(findAdmin(list1, 'JavaScript'));


/* +++++++++++++++6 kyu
Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.
Your task is to return either:
    true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
    false otherwise.
For example, given the following input array:
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.
Notes:
The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented. */


function isLanguageDiverse1(list) {
  const numOfLangPerDevsObj = list.reduce((acc, crr) => {
    acc[crr.language] = (acc[crr.language] || 0) + 1;
    return acc;
  }, {});
  
  if(list.length === 1) {
    return false;
  }
  
  const arrayOfNumOfDevsPerLang = [];
  
  for(let lang in numOfLangPerDevsObj) {
    arrayOfNumOfDevsPerLang.push(numOfLangPerDevsObj[lang]);
  }
  
  if(Math.max(...arrayOfNumOfDevsPerLang) <= (Math.min(...arrayOfNumOfDevsPerLang)*2)) {
    return true;
  }
  
  return false;
}

// refactored:

function isLanguageDiverse2(list) {
  const numOfLangPerDevsObj = list.reduce((acc, crr) => {
    acc[crr.language] = (acc[crr.language] || 0) + 1;
    return acc;
  }, {});
  
  if(list.length === 1) {
    return false;
  }
  
  const arrayOfNumOfDevsPerLang = Object.values(numOfLangPerDevsObj);

  return !arrayOfNumOfDevsPerLang.some(langCount => langCount > 2*Math.min(...arrayOfNumOfDevsPerLang));
}

/* +++++++7 kyu
Coding Meetup #14 - Higher-Order Functions Series - Order the food
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
For example, given the following input array:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }
Notes:
The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.
 */


function orderFood(list) {
  return list.reduce((acc, crr) => {
    acc[crr.meal] = (acc[crr.meal] || 0) + 1;
    return acc;
  }, {});
}

//the same but with a Map:

function orderFood(list) {
  return list.reduce((acc, crr) => {
    acc.set(crr.meal, (acc.get(crr.meal) || 0) + 1);
    return acc;
  }, new Map());
}


/* +++++++++++6 kyu
Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Given the following input array:
var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
Explanation of the above:
    Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
    Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:
    Preserve the order of the original list.
    Return an empty array [] if there is no developer with an "odd" name.
    The input array and first names will always be valid and formatted as in the example above. */


function findOddNames(list) {
  return list.filter(dev => {
    return ([...dev.firstName].reduce((acc, crr) => {
      acc += crr.charCodeAt(0);
      return acc;
    }, 0)) % 2 === 1;
  })
}

// OR:

const findOddNames2 = (list) =>
  list.filter(d=>d.firstName
                  .split('')
                  .map(c=>c.charCodeAt(0))
                  .reduce((a,b)=>a+b,0) 
                  % 2 !== 0);



/* +++++++++6 kyu
Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Given the following input array:
var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that
    adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.
    and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:
    At most only one of the values will be null / empty.
    Preserve the order of the original list.
    Return an empty array [] if there is no developer with missing details.
    The input array will always be valid and formatted as in the example above. */


function askForMissingDetails(list) {
  return list.filter(dev =>  {
    for(let property in dev) {
      if(dev[property] === null) {
        dev.question = `Hi, could you please provide your ${property}.`
        return true;
      }
    }
    return false;
  })
}



console.log(parseInt({ toString: () => 2, valueOf: () => 1 }), "parse iNT");


/* ++++++++++++6 kyu
Create Phone Number
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */

function createPhoneNumber(numbers){
  
  const inputNum = (startInd, endInd) => {
        return numbers.filter((_,ind) => (startInd <= ind) && (ind <= endInd))
                      .join("");
    };
  
  return `(${inputNum(0,2)}) ${inputNum(3,5)}-${inputNum(6,9)}`;
}

//higher order function, testing:

function createPhoneNumber(numbers){
  
  const inputNumUNI = (array) => {
        return (startInd, endInd) => array.filter((_,ind) => (startInd <= ind) && (ind <= endInd))
                                          .join("");
    };
  
  const inputNum = inputNumUNI(numbers);
  
  return `(${inputNum(0,2)}) ${inputNum(3,5)}-${inputNum(6,9)}`;
}

//smart CW solution:

function createPhoneNumber(numbers){
  const format = "(xxx) xxx-xxxx";
  
  for(let i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

/* ++++++++++++6 kyu
Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram1(string){
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const lettersInString = [];
  for(let char of string.toLowerCase()) {
    if(alphabet.includes(char)) {
      lettersInString.push(char);
    }
  }
  const uniqueLetter = new Set(lettersInString);
  
  return uniqueLetter.size === 26;
}

//solution using charCodeAt:

function isPangram2(string) {
  const letterSet = new Set();
  for (const char of string.toLowerCase()) {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      letterSet.add(char);
    }
  }
  return letterSet.size === 26;
}

//smart Cw solution:

function isPangram3(string){
  string = string.toLowerCase();
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return lowerCaseAlphabet.every(letter => string.indexOf(letter) !== -1);
  };


/*  ++++++++++++ 7 kyu
  The Coupon Code
  Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false */


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode &&
         Date.parse(currentDate) <= Date.parse(expirationDate);
}


/* 7 kyu
Alternate capitalization
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces. */

//using forEach:

function capitalize1(s){
  const capitalizeEven = [];
  const capitalizeOdd = [];
  
  s.split("")
    .forEach((letter, ind) => {
    if(ind % 2 === 0) {
      capitalizeEven.push(letter.toUpperCase());
      capitalizeOdd.push(letter)
    } else {
      capitalizeEven.push(letter);
      capitalizeOdd.push(letter.toUpperCase());
    }
  })
  
  const stringEven = capitalizeEven.join("");
  const stringOdd = capitalizeOdd.join("");
  
  return [stringEven, stringOdd];
};

//using map:

function capitalize2(s){
  return [s,s].map((_,ind) => {
    if(ind % 2 === 0) {
      return s.split("")
            .map((letter,ind) => ind % 2 === 0 ? letter.toUpperCase(): letter)
            .join("")
    } else {
      return s.split("")
            .map((letter,ind) => ind % 2 === 1 ? letter.toUpperCase(): letter)
            .join("")
    }
  })
};

/* or simply:
function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
}; */

//using reduce (best solution- best time/space complexity):

function capitalize3(s){
  return s.split("")
        .reduce((acc, crr, ind) => {
    acc[0] += ind % 2 === 0 ? crr.toUpperCase(): crr;
    acc[1] += ind % 2 === 1 ? crr.toUpperCase(): crr;
    return acc;
  },["", ""])
};


/* +++++++++7 kyu
Anagram Detection
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. */

const isAnagram1 = (test, original) => {
  
  if(test.length !== original.length) return false;
  
  const sortedLettersInTest = [...test.toLowerCase()].sort();
  const sortedLettersInOrigiinal = [...original.toLowerCase()].sort();
  
  for(let i = 0; i < sortedLettersInOrigiinal.length; i++) {
    if(sortedLettersInTest[i] !== sortedLettersInOrigiinal[i]) {
      return false;
    }
  }
  return true;
}

//or simply:

const isAnagram2 = (test, original) => {
  const testString = test.toLowerCase().split('').sort().join('');
  const originalString = original.toLowerCase().split('').sort().join('');
  return testString === originalString;
};


/* ++++++++++6 kyu
Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. */

function spinWords(string){
  const arrayFromStr = string.split(" ");
  
  const reversedWordsArr = arrayFromStr.map(word => {
                            if(word.length >= 5) {
                              return word.split("")
                                          .reverse()
                                          .join("");
                            } else return word;
                           });

  return reversedWordsArr.join(" ");
}


/* ++++++++++++6 kyu
Replace With Alphabet Position
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example:
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */


function alphabetPosition(text) {
  
  const alhphabetString = "abcdefghijklmnopqrstuvwxyz";
  
  return text.toLowerCase().split("")
    .filter(char => char.charCodeAt() >= 97 && char.charCodeAt() <= 122 )
    .map((letter) => alhphabetString.indexOf(letter) + 1)
    .join(" ");
}


/* ++++++++++6 kyu
Convert string to camel case
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){

  return str.split("")
        .map((char, ind, arr) => {
          if(arr[ind - 1] === "_" || arr[ind - 1] === "-") {
            return char.toUpperCase();
          } else {
           return char;  
          } 
        })
        .filter(char => char !== "_" && char !== "-")
        .join("");
}



/* ++++++++++6 kyu
Split Strings
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str){
  const finalArray = [];
  
  for(let i = 0; i <= str.length; i++) {
    if(i === str.length && i % 2 === 1) {
      finalArray.push(`${str[i-1]}_`);
    } else if(i % 2 === 1) {
      finalArray.push(`${str[i-1]}${str[i]}`);
    } 
  }
  
  return finalArray;
}

//OR (better):

function solution(str){
  const finalArray = [];
  
  if(str.length % 2 === 1) {
    str += "_";
  }
  
  for(let i = 1; i < str.length; i += 2) {
    finalArray.push(`${str[i-1]}${str[i]}`);
  }
  
  return finalArray;
}


/* function solution(str){2
  const finalArray = [];
  const  splitArray = str.split("");
  
  for(let i = 0; i <= splitArray.length; i++) {
    if(i === splitArray.length &&  i % 2 === 1) {
      finalArray.push(`${splitArray[i-1]}_`)
    } else if(i % 2 === 1) {
      finalArray.push(`${splitArray[i-1]}${splitArray[i]}`);
    } 
  }
  
  return finalArray;
} */


/* 
+++++++++++5 kyu
Rot13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

function rot13(message){
  const alhphabetString = "abcdefghijklmnopqrstuvwxyz";
  
  return message.split("")
        .map((char) => {
          if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {   
            let j = alhphabetString.indexOf(char);    
            for(let i = 1; i <= 13; i++) {          
              j++;
              if(j === alhphabetString.length) {
                j = 0;
              }             
              if(i === 13) {
                return alhphabetString[j];
              } 
            }  
          };

          if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            let j = alhphabetString.indexOf(char.toLowerCase());
            for(let i = 1; i <= 13; i++) {
              j++;
              if(j === alhphabetString.length) {
                j = 0;
              }
              if(i === 13) {
                return alhphabetString[j].toUpperCase();
              } 
            }  
          }
          return char;
        })
        .join("");
}
            
//Refactored:

function rot13(message){
  const alhphabetString = "abcdefghijklmnopqrstuvwxyz";
  
  return message.split("")
        .map((char) => {
          if((char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)) {   
            let j = alhphabetString.indexOf(char.toLowerCase());
            for(let i = 1; i <= 13; i++) {          
              j++;
              if(j === alhphabetString.length) {
                j = 0;
              }                
              if(i === 13) {
                return char === char.toLowerCase() ? alhphabetString[j] : alhphabetString[j].toUpperCase();
              } 
            }
          }
          return char;
        })
        .join("");
}

//OR:

function rot13(message) {
  return message.split("")
    .map(char => {
      if ((char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)) {
        const shift = char.toLowerCase() <= 'm' ? 13 : -13;
        return String.fromCharCode(char.charCodeAt() + shift);
      }
      return char;
    })
    .join("");
}


/* ++++++++++++7 kyu
Sum of odd numbers
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8 */

function rowSumOddNumbers(n) {

  if(n===1) return 1;

  const calculateEndNum = x => {
    if(x === 2) return 2;
    return 2*(x-1) + calculateEndNum(x-1);
  }

    return n**3 - n**2 + n + calculateEndNum(n);
}


//OR:


function rowSumOddNumbers(n) {

  const startingNumAtRowN = n*(n-1) + 1;

  const arrayOfNumAtRowN = [startingNumAtRowN];

  for(let i = 1; i <= n-1; i++) {
    let nextNum = startingNumAtRowN + 2*i;
    arrayOfNumAtRowN.push(nextNum);
    
  }

  return arrayOfNumAtRowN.reduce((acc, crr) => acc + crr, 0);
}

//refactored:

function rowSumOddNumbers(n) {

  const startingNumAtRowN = n*(n-1) + 1;

  const arrayOfNumAtRowN = [startingNumAtRowN];

  for(let i = 0; i < n - 1; i++) {
    arrayOfNumAtRowN.push(arrayOfNumAtRowN[i]+2);
  }
  return arrayOfNumAtRowN.reduce((acc, crr) => acc + crr, 0);
}

//OR JUST:


function rowSumOddNumbers(n) {

  return n**3;
}



/* +++++++8 kyu
Basic subclasses - Adam and Eve
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes. */

class God1{
  static create(){
    return [new Man("Homo Sapiens", "man"), new Woman("Homo Sapiens", "woman")];
  }
}

class Human1 {
  constructor(species) {
    this.species = species;
  }
}

class Man extends Human1 {
  constructor(species, body) {
    super(species);
    this.body = body;
  }
}

class Woman extends Human1 {
  constructor(species, body) {
    super(species);
    this.body = body;
  }
}

//or just:

class God2{
    static create(){
      return [new Man, new Woman];
    }
  }

class Human2{}
class Man2 extends Human2{}
class Woman2 extends Human2{}


/* ++++++++++++8 kyu
Classic Hello World
You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything
Note that for some languages, the function main is the entry point of the program.

Here's how it will be tested:
    Solution.main("parameter1","parameter2"); */


// Print "Hello World!" to the screen
class Solution{
  
  static main() {
    console.log("Hello World!");
  }
}

/* 8 kyu
Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34 */

class Person5 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get info() {
    return this.name + "s age is " + this.age;
    //or `${this.name}s age is ${this.age}`
  }
}

/* ++++++++++++++++++7 kyu
SantaClausable Interface
You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.
Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object:
    sayHoHoHo() / say_ho_ho_ho
    distributeGifts() / distribute_gifts
    goDownTheChimney() / go_down_the_chimney */


function isSantaClausable(obj) {

  if(typeof obj !== "object") return false;

  return "sayHoHoHo" in obj && "distributeGifts" in obj && "goDownTheChimney" in obj;
  
}

//better:

function isSantaClausable(obj) { 
  return typeof obj.sayHoHoHo === "function" &&
          typeof obj.distributeGifts === "function" &&
          typeof obj.goDownTheChimney === "function";
}

//OR:

function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
    return typeof obj[methodName] == 'function';
  });
}


/* ++++8 kyu
Barking mad
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark. */

function Dog9 (breed) {
  this.breed = breed;
}

const snoopy = new Dog9("Beagle");

const scoobydoo = new Dog9("Great Dane");

Dog9.prototype.bark = function() {
  return "Woof";
}

//as a class:

class Dog2 {
  constructor(breed) {
    this.breed = breed;
  }
  bark() {
    return "Woof";
  }
}

const snoopy1 = new Dog2("Beagle");

const scoobydoo1= new Dog2("Great Dane");

/*+++++++++++++6 kyu
Simple Web Framework #1: Create a basic router
In this Kata, you have to design a simple routing class for a web framework.
The router should accept bindings for a given url, http method and an action.
Then, when a request with a bound url and method comes in, it should return the result of the action.
Example usage:
var router = new Router;
router.bind('/hello', 'GET', function(){ return 'hello world'; });
router.runRequest('/hello', 'GET') // returns 'hello world';
When asked for a route that doesn't exist, router should return:
'Error 404: Not Found'
The router should also handle modifying existing routes. See the example tests for more details. */

//solution:

const Router1 = function() {  
  this.GET = {};
  this.POST = {};
  
  this.bind = function(url, httpMethod, action) {
    this[httpMethod][url] = action;
  }
  
  this.runRequest = function(url, httpMethod) {
    return this[httpMethod][url] ? this[httpMethod][url]() : 'Error 404: Not Found';
  }
}

// solution for any httpMethod method:

const Router2 = function() { 
  
  this.bind = function(url, httpMethod, action) {
    if(!this[httpMethod]) {
      this[httpMethod] = {};
    }
    this[httpMethod][url] = action;
  }
  
  this.runRequest = function(url, httpMethod) {
    if(this[httpMethod] && this[httpMethod][url]) {
      return this[httpMethod][url]();
    } else {
      return 'Error 404: Not Found';
    }
  }
}

//using a Map:

function Router3() {
  this.routing = new Map();
  
  this.bind = function(url, method, action) {
    this.routing.set(`${method}: ${url}`, action);
  }
  
  this.runRequest = function(url, method) {
    if(this.routing.has(`${method}: ${url}`)) {
      return this.routing.get(`${method}: ${url}`)();
    }
    return 'Error 404: Not Found';
  }
}

/* const router = new Router3;

router.bind('/hello', 'GET', function() { return 'hello world'; });
router.bind('/login', 'GET', function() { return 'Please log-in.'; });

console.log(router.runRequest('/hello', 'GET'))
console.log(router.runRequest('/login', 'GET')) */


/* +++++++5 kyu
Moving Zeros To The End 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

function moveZeros(arr) {

  const arrayOfZeros = [];
 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      arr.splice(i,1);
      arrayOfZeros.push(0);
      i--;
    }
  }
  return arr.concat(arrayOfZeros);
}

console.log(moveZeros1([1,2,0,0,0,1,0,1,0,3,0,1]));


//or simply:

function moveZeros1(arr) {

  return arr.filter(element => element !== 0)
            .concat(arr.filter(element => element === 0));
}


/* +++++++++++6 kyu
Which are in?
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
Notes:
    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: In some languages r must be without duplicates. */



function inArray(array1,array2){
  return array1.filter((array1Item) => {
    for(let array2Item of array2) {
      for(let i = 0; i <= (array2Item.length - array1Item.length); i++) {
        if(array2Item.substring(i, i + (array1Item.length)) === array1Item) {
          return true;
        }
      }
    }
  })
  .sort();
}

//or shorter with the use of the some method:

function inArray2(arr1, arr2) {
  return arr1.filter(arr1Item => {
    return arr2.some(arr2Item => {
      return arr2Item.indexOf(arr1Item) !== -1;
    })
  }).sort();
}


/* a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "strong","live"]
console.log(inArray2(a1, a2)); */

/* +++++++8 kyu
Total amount of points
Our football team has finished the championship.
Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
For example: ["3:1", "2:2", "0:1", ...]
Points are awarded for each match as follows:
    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above. */

function points(games) {
  return games.reduce((acc, crr) => {
    if(crr[0] > crr[2]) acc += 3;
    else if(crr[0] == crr[2]) acc += 1;
    return acc;
  }, 0)
}



/* +++++++++++6 kyu
Mexican Wave
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */


function wave(str){
  const mexicanArray = [];
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === " ") continue;
    let currentWord = str.split("")
            .map((letter, ind) => ind === i ? letter.toUpperCase() : letter)
            .join("");
    
    mexicanArray.push(currentWord);
  }
  
  return mexicanArray;
}

//faster:


function wave2(str){
  const mexicanArray = [];
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === " ") continue;

    const currentWordArray = str.split("");
    currentWordArray[i] = currentWordArray[i].toUpperCase();

    mexicanArray.push(currentWordArray.join(""));
  }
  
  return mexicanArray;
}

console.log(wave2("hello world"));


/* ++++++++++++8 kyu
Count of positives / sum of negatives
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65] */

function countPositivesSumNegatives(input) {
  
  if(!input) return [];
  return input.reduce((acc, crr) => {
    if(crr > 0) {
      acc[0] = (acc[0] || 0) + 1;
      acc[1] = acc[1] ?? 0;
    } else if (crr < 0) {
      acc[1] = (acc[1] || 0) + crr;
      acc[0] = acc[0] ?? 0;
    }
    return acc;
  },[])
}
 //OR:

function countPositivesSumNegatives(input) {
  
  if(!input || input[0] === undefined) return [];
  
  let positiveNum = 0;
  let negativeNum = 0;
  
  input.forEach(item => {
    item > 0 ? positiveNum++ : item < 0 ? negativeNum += item : null;
  })
  
  return [positiveNum, negativeNum];
}

//OR - best of both solutions improved:

function countPositivesSumNegatives(input) {
  if(!input || !input.length) return [];
  
  return input.reduce((acc, crr) => {
    if(crr > 0) {
      acc[0] += 1;
    } else if (crr < 0) {
      acc[1] += crr;
    }
    return acc;
  },[0,0]);
}


/* ++++++++++8 kyu
Find the first non-consecutive number
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null2.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too! */


function firstNonConsecutive (arr) {
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[i-1] + 1) return arr[i];
  }
  return null;
}


function AgencyContractor(hourlyRate, hours, taxRate){
  this.hourlyRate = hourlyRate
  this.hours = hours
  this.taxRate = taxRate
  this.calculateProfit = function() {
    return this.hourlyRate * this.hours * (1 - this.taxRate)
  }
  this.invoiceClient = function(){
    return `Your invoice total is ${this.hourlyRate * this.hours}`
  }
}


class AgencyContractor1 {
  constructor(hourlyRate, hours, taxRate) {
    this.hours = hours;
    this.taxRate = taxRate;
    let rate = hourlyRate;
    let calculateProfit = () => {
      return rate * this.hours * (1 - this.taxRate);
    };
  } 
  showProfit = function () {
      return calculateProfit();
    };

  invoiceClient = function () {
      return `Your invoice total is ${rate * this.hours}`;
    };
  }


let leon = new AgencyContractor(250,160,0.35)



class AgencyContractor2 {

  #private;

  constructor(hourlyRate, hours, taxRate, private1) {
    this.#private = private1;
    this.hourlyRate = hourlyRate;
    this.hours = hours;
    this.taxRate = taxRate;
    this.calculateProfit = function () {
      return this.hourlyRate * this.hours * (1 - this.taxRate);
    };
    this.invoiceClient = function () {
      return `Your invoice total is ${this.hourlyRate * this.hours}`;
    };
  }
}

let leon2 = new AgencyContractor2(250,160,.35, 999)

leon2.#private = 2;





