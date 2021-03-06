// String Reversal
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
function reverse(string) {
    return string
        .split('')
        .reverse()
        .join('');
};

// Solution #2
function reverse(string) {
    let reversed = '';

    for (let character of string) {
        reversed = character + reversed;
    };

    return reversed;
};

// Solution #3
function reverse(string) {
    return string
        .split('')
        .reduce((reversed, character) => character + reversed, '');
};





// Palindromes
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1
function palindrome(string) {
    const reversed = string.split('').reverse().join('');
    
    return string === reversed;
};

// Solution #2
function palindrome(string) {
    return string.split('').every((value, index) => {
        return value === string[string.length - index - 1]});
};





// Integer Reversal
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
    let reversedInteger = number
                            .toString()
                            .split('')
                            .reverse()
                            .join('');

    return parseInt(reversedInteger) * Math.sign(number);
};





// Max Character
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
    const charMap = {};

    for (let character of string) {
        charMap[character] = charMap[character] + 1 || 1;
    };

    let maxValue = '';
    let maxCount = 0;

    for (let key in charMap) {
        if (charMap[key] > maxCount) {
            maxValue = key;
            maxCount = charMap[key];
        };
    };

    return maxValue;
};





// The Classic FizzBuzz!
// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        };
    };
};





// Array Chunking
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #1
function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        let lastElement = chunked[chunked.length - 1];

        if (!lastElement || lastElement.length === size) {
            chunked.push([element]);
        } else {
            lastElement.push(element);
        };
    };

    return chunked;
};

// Solution #2
function chunk(array, size) {
    const chunked = [];
        
    for (let index = 0; index < array.length; index += size) {
        chunked.push(array.slice(index, index + size));
    };
    
    return chunked;
};

// Solution #3
function chunk(array, size) {
    const chunked = [];

    while (array.length > 0) {
        chunked.push(array.splice(0, size));
    };

    return chunked;
};





// Anagrams
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
function anagrams(stringA, stringB) {
    const aCharacterMap = buildCharacterMap(stringA);
    const bCharacterMap = buildCharacterMap(stringB);
    
    // Object.keys returns an array of keys of object
    if (Object.keys(aCharacterMap).length !== Object.keys(bCharacterMap).length) {
        return false;
    };
    
    for (let key in aCharacterMap) {
        if (aCharacterMap[key] !== bCharacterMap[key]) {
            return false;
        };
    };

    return true;
};
// helper function to build a character map
function buildCharacterMap(string) {
    const characterMap = {};

    for (let character of string.replace(/[^\w]/g, '').toLowerCase()) {
        characterMap[character] = characterMap[character] + 1 || 1;
    };

    return characterMap;
};

// Solution #2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
};
// helper function to clean up string and remove spaces & punctuations
function cleanString(string) {
    return string
                .replace(/[^\w]/g, '')
                .toLowerCase()
                .split('')
                .sort()
                .join('');
};





// Sentence Capitalization
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1
function capitalize(string) {
    const words = [];

    for (let word of string.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    };

    return words.join(' ');
};

// Solution #2
function capitalize(string) {
    let result = string[0].toUpperCase();
    
    for (let i = 1; i < string.length; i++) {
        if (string[i - 1] === ' ') {
            result += string[i].toUpperCase();
        } else {
            result += string[i];
        };        
    };
        
    return result;
};





// Printing Steps
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1 - Iterative
function steps(number) {
    for (let row = 0; row < number; row++) {
        let stair = '';

        for (let column = 0; column < number; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            };
        };
        console.log(`'${stair}'`);    
    };
};

// Recursive tips
function printNumber(number, decrement = 1) {
    if (number === 0) {
        return;
    };

    console.log(number);

    printNumber(number - decrement);
};
// printNumber(10); --> To test this function

// Solution #2 - Recursive
function steps(number, row = 0, stair = '') {
    // define the base case
    if (number === row) {
        return;
    };

    if (number === stair.length) {
        console.log(stair);
        return steps(number, row + 1);
    };

    if (stair.length <= row) { // # alternative way with ternary expression
        stair += '#'; 
    } else {
        stair += ' ';
    };

    steps(number, row, stair);
    
    // # ternary expression way
    // const add = stair.length <= row ? '#' : ' ';
    // steps(number, row, stair + add);
};





// Two Sided Steps - Pyramids
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #1 - Iterative
function pyramid(number) {
    const midpoint = Math.floor((number * 2 - 1) / 2);

    for (let row = 0; row < number; row++) {
        let level = '';

        for (let column = 0; column < (2 * number - 1); column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            };
        };
    
    console.log(`'${level}'`);
    };
};

// Solution #2 - Recursive
function pyramid(number, row = 0, level = '') {
    // first base case for the row
    if (row === number) return;
    
    // second base case for the column
    if (level.length === (number * 2 - 1)) {
        console.log(`'${level}'`);
        // make the function call itself with an incremented row value
        return pyramid(number, row + 1);
    };
    
    // add conditional logic to increament level string value
    const midpoint = Math.floor((number * 2 - 1) / 2);
    
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        level += '#'
    } else {
        level += ' ';
    };

    // make the function call itself with incremented level string value
    pyramid(number, row, level);
};





// Finding Vowels
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #1
function vowels(string) {
    let counter = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of string.toLowerCase()) {
        if (checker.includes(char)) {
            counter++;
        };
    };

    return counter;    
};

// Solution #2
function vowels(string) {
    const matches = string.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
};





// Spiral Matrix
// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(number) {
    let results = [];
    
    for (let i = 0; i < number; i++) {
        results.push([]);
    };
    
    let counter = 1;
    let startColumn = 0;
    let endColumn = number - 1;
    let startRow = 0;
    let endRow = number - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        };
        startRow++;
        
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        };
        endColumn--;
        
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        };
        endRow--;
        
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        };
        startColumn++;
    };
    
    return results;
};





// Fibonacci
// --- Directions - 
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution #1 - Iterative
function fib(number) {
    const result = [0, 1];

    for (let i = 2; i <= number; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }

    return result[number];
};

// Solution #2 - Recursive
function fib(number) {
    if (number < 2) {
        return number;
    };

    return fib(number - 1) + fib(number - 2);
};

// Solution #3 - Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(number) {
    if (number < 2) {
        return number;
    };

    return fib(number - 1) + fib(number - 2);
};

const fib = memoize(slowFib);





// Queue
// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}





// Weave
// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }

    return q;
}





// Stack
// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}





// Queue From Stack
// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }
        
    add(record) {
        this.firstStack.push(record);
    }
    
    remove() {
        while (this.firstStack.peek()) {
            this.secondStack.push(this.firstStack.pop());
        }

        // this is the record we want
        const record = this.secondStack.pop();
        while (this.secondStack.peek()) {
            this.firstStack.push(this.secondStack.pop());
        }

        return record;
    }

    peek() {
        while (this.firstStack.peek()) {
            this.secondStack.push(this.firstStack.pop());
        }

        const record = this.secondStack.peek();

        while (this.secondStack.peek()) {
            this.firstStack.push(this.secondStack.pop());
        }

        return record;
    }   
}





// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = null;
    }

    insertFirst(data) {
        /* refactor
        this.head = new Node(data, this.head); */
        this.insertAt(data, 0);
    }
    
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }
    
    getFirst() {
        // refactor return this.head;
        return this.getAt(0);
    }

    getLast() {
        /* refactor 
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        } */
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;            
        }
        previous.next = null;        
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new.Node(data);            
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            // if we found what we needed
            if (counter === index) {
                return node;
            }

            // if not, move on to the next node
            counter++;
            node = node.next;

            // we reached the end
        }
        
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}





// Find the Midpoint
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}





// Circular Lists?
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    // we could do list.head, but you know
    slow = list.getFirst();
    fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }

    // if we exit the while loop, that means there's no loop
    return false;
}





// Step Back From the Tail
// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}





// Tree
// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            
            arr.unshift(...node.children);
            fn(node);
        }
    }
}





// Tree Width with Level Width
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 's'];
    const counters = [0];

    while (arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
}





// Binary Search Trees
// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }

        return null;
    }
}





// Validating a BST
// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}





// Events
// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.events = {};
    }
  
    // Register an event handler
    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }
  
    // Trigger all callbacks associated with a given eventName
    trigger(eventName) {
        if (this.events[eventName]) {
            for (let callback of this.events[eventName]) {
                callback();
            }
        }
    }
  
    // Remove all event handlers associated with the given eventName
    off(eventName) {
      if (this.events[eventName]) {
          delete this.events[eventName];
      }
    }
}





// Sorting
// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}