// bigints
let alot = 9007199254740991n;
console.log(alot + 1n);

//strings
let cat = "Cheshire";
console.log(cat.length);
console.log(cat[0]);

// let answer = prompt("Enter your name");
let answer;
console.log(answer);
console.log(typeof(answer)); //string

// symbols
let alohomora = Symbol();
console.log(typeof(alohomora));

// objects
console.log(typeof({}));
console.log(typeof([]));
console.log(typeof(new Date()));
console.log(typeof(/\d+/));
console.log(typeof(Math));

let rapper = {name: 'Malicous'};
rapper.name = 'Malice';
console.log(rapper);
rapper['name'] = 'No Malice';

// we can create objects by not destroy them

// functions are objects
for (let i = 0; i < 7; i++) {
    console.log(2);
}

for (let i = 0; i < 7; i++) {
    console.log({});
}

for (let i = 0; i < 7; i++) {
    console.log(function(){});
}

let countDwarves = function() {return 7;}
let dwarves = countDwarves;
console.log(dwarves); // function name
let dwarvesCall = countDwarves();
console.log(dwarvesCall);