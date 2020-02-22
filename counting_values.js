console.log(typeof(undefinied));

let person = undefined;
// console.log(person.mood);
// nope, cannot add properties to undefined or any primitive value

let bandersnatch;
// console.log(bandersnatch);
// undefined because there is no value

// console.log(jabberwocky);
let jabberwocky;
// not undefined -> reference error

let mimsy = null;
// console.log(mimsy.mood);
// nope, cannot add properties to any primitive value -> type error

console.log(typeof(null));
// object!?!  longstanding error in js

console.log(typeof(true));
console.log(typeof(false));

let isSad = true;
let isHappy = !isSad;
let isFeeling = isSad || isHappy;
console.log(isFeeling);
// is one of them true -> yes, isSad
let isConfusing = isSad && isHappy;
console.log(isConfusing);
// are both true -> no

console.log(typeof(28));
console.log(typeof(3.14));
console.log(typeof(-140));
// all numbers

console.log(0.1 + 0.2 === 0.3);
// false
console.log(0.1 + 0.2 === 0.30000000000000004);
// true
// floating point math

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 5);

let scale = 0;
let a = 1 / scale; //Infinity
let b = 0 / scale; //NaN
let c = -a; //-Infinity
let d = 1 / c; //-0

console.log(typeof(NaN));
