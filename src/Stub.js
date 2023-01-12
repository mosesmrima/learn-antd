#!/bin/node
let arr = [{id:1,name:'a',age:10},{id:1,name:'b',age:12},{id:2,name:'c',age:15},{id:3,name:'d',age:20},{id:1,name:'a',age:10}];

function checkIfArr(input) {
    return Array.isArray(input);
}
 console.log("Is input an array?")
const text= prompt("Input to check if it's an array");
console.log(text)
console.log(checkIfArr(33))

function cloneArray(arr) {
    return [...arr];
}
console.log("Clone array")
console.log(cloneArray([1,2,3,4]))

function filterByID(arr) {
    let keys =
        new Set();
    let noDupId = arr.filter( el => {
        let key = el.id;
        if (keys.has(key)) {
            return false;
        } else {
            keys.add(key);
            return true;
        }
    });
    console.log("Filter by ID:")
    console.log("\t",noDupId);
}

filterByID(arr)


function filterByIDAndName(arr) {
    let keys = new Set();
    let names = new Set();
    let noDupId = arr.filter( el => {
        let key = el.id;
        let name = el.name
        if (keys.has(key) && names.has(name)) {
            return false;
        } else {
            names.add(name)
            keys.add(key);
            return true;
        }
    });
    console.log("\nFilter by ID and Name:")
    console.log("\t",noDupId);
}

filterByIDAndName(arr)

function retElements(arr, n=1) {
    if (n !== 1) return arr.slice(0, n);
    return arr.shift()
}

console.log("Return first n elements:")
console.log(retElements(arr, 3))


function fib(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fib(n-1) + fib(n-2)
}

console.log("Fibanocci sequence:")
console.log(fib(4))

function splitToArr(string, lim) {
    return string.split(" ", lim)
}

console.log("String to array:")
console.log(splitToArr("Hello there how are you", 3))

function rand() {
    console.log("Random number:")
    console.log(Math.floor(Math.random() * 10))
}
rand()


function reverseNum(num) {
    console.log(parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num));
}
console.log("Reversing a number:")
reverseNum(12300)

function sortThree(a, b, c) {
    if (a >= b && b >= c) {
        console.log(a,b,c)
    } else if (b >= a && a >= c) {
        console.log(b, a, c)
    } else if (c >= b && b >= a) {
        console.log(c, b, a)
    } else if (c >= a && a >= b) {
        console.log(c, a, b)
    } else if (a >= c && c >= b) {
        console.log(a, c, b)
    } else if (b >= c && c >= a) {
        console.log(b, c, a)
    }
}

console.log("Sort 3 numbers in descending order")
sortThree(1,2,3)

