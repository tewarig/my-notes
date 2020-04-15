let fruit = 'apple';
console.log(fruit.length); // it is used find the length of a variable
console.log(fruit.indexOf('le'));// it is used to find the length (index) from the given character('le')
console.log(fruit.slice(1,3)); //string slicing
console.log(fruit.replace('pp','ll')); //find and replace
console.log(fruit.toUpperCase()); //uppercase the whole string
console.log(fruit.toLowerCase()); //lowercase the whole string
console.log(fruit.charAt(1)); //find the char value from a string
console.log(fruit.split('pp')); // split the characters from a string 
//best uses of split 
let fruitOne = 'apple,mango,banana';
//console.log(fruitOne.split(','));
console.log(fruitOne.join(' | '));
