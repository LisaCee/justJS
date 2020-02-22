let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction);
// yikes, can't change primitive values

let arr = [212, 8, 506];
let str = 'hello';
console.log(arr[0]);
console.log(str[0]);
// you can access string values like arrays, but not modify them

arr[0] = 40;
console.log(arr);
// arr = 40, 8, 506

str[0] = 'j';
console.log(str);
// nope

let fifty = 50;
fifty.shades = 'gray';
// primitive values don't have properties (dot notation)

let pet = 'Narwhal';
pet = 'Kraken';
console.log(pet);
// replacing string with string

function double(x) {
    x = x * 2;
}

let money = 10;
double(money); // 20
console.log(money); // still 10
