let sherlock = {
    surname: 'Holmes',
    address: {city: 'London'}
};

let john = {
    surname: 'Watson',
    address: sherlock.address 
};

john.surname = 'Lenon';
john.address.city = 'Malibu';

console.log(sherlock); //Malibu
console.log(john);

sherlock.age = 64;
console.log(sherlock.age);

console.log(sherlock['age']);