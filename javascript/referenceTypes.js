//reference types

/*
Under Reference Types:
1) Object
2) Array
3) Function
*/
//object
let person = {
    name: 'Nishant',
    age: 30
};
console.log(person);
//for specfic items
console.log(person.name);
//Dot Notation
person.name = 'John';
console.log(person.name);
//Bracket Notation
person['name'] = 'Mary';
console.log(person.name);

//Arrays
//Technically, An Array is an object
let selectName = ['nishant','gaurav','chirag'];  
selectName[0] = 'vimal';//to change the item name in array
selectName[3] = 'nishant'; // to add other item in array
console.log(selectName);
console.log(selectName[0]);  //for a particular item in a array
console.log(typeof selectName);
//for loop in array
for(let i = 0 ; i < selectName.length ; i++) {
    console.log(selectName[i]);
}
//some common methods
console.log(selectName.toString()) // convert to string
console.log(selectName.join(" | ")); // join a string with the given value
console.log(selectName.pop(),selectName); // remove the last items
selectName.push('kartik')//appends
console.log(selectName); 
selectName.shift(); // remove the first element 
console.log(selectName);
selectName.unshift('aaditya')//add first element to an array
console.log(selectName);
//concat the string in an array
let selectNewName = ['riya','priya','anu']
let newSelectValue  = selectNewName.concat(selectName);
console.log(newSelectValue); 
//reverse the concat 
let newSelectValue1 = selectName.concat(selectNewName);
console.log(newSelectValue1);




//function
function greet(a,b) {
    let c = a+b;
    console.log("total:",c);
}
let a = 10;
let b = 10;
greet(a,b);