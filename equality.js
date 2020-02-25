// // strict equality
// a === b;
// // loose equality
// a == b;
// // same value equality
// Object.is(a, b);

console.log(Object.is(2, 2));
console.log(Object.is({}, {}));

let dwarves = 7;
let continents = '7';
let worldWonders = 7;

console.log(Object.is(dwarves, continents)); //false
console.log(Object.is(continents, worldWonders)); // false
console.log(Object.is(worldWonders, dwarves));
// true

let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

console.log(Object.is(banana, cherry)); //false
console.log(Object.is(cherry, chocolate)); //false
console.log(Object.is(chocolate, banana)); //true

// 2 === 2; //true because only 1 version of 2 in js

// {} === {}; // because independently created objects

// // exceptions
// NaN === NaN; // false
// -0 === 0; // true
// 0 === -0; //true

// let width = 0 / 0; // NaN
// let height = width * 2; // still NaN;
// console.log(width === height); //NaNs are false
// console.log(Object.is(width, height)); //true


// function resizeImage(size) {
//     if (size === NaN) {
//         // false
//         console.log('Something is wrong.')
//     }
// }

// // instead
// Number.isNaN(size);
// Object.is(size, NaN);
// size !== size;

let width = 0;
let height = -width; 
console.log(width === height); // true
console.log(Object.is(width, height)); // false

function strictEquals(a, b) {
    // should return same value as a === b
    // https://gist.github.com/gaearon/08a85a33e3d08f3f2ca25fb17bd9d638?ck_subscriber_id=734502392
}

console.log([[]] == ''); // true
console.log(true == [1]); // true
console.log(false == [0]); // true

if (x == null) {
    return;
}

// is equivalent to 

if (x === null || x === undefined) {
    return;
}
