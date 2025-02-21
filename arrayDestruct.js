const numbers = [1,2,3,4];
const [a, b, c] = numbers; 
console.log(a, b, c); 

const [first, , third] = numbers; 
console.log(first, third); 

const [x, y, ...others] = numbers; 
console.log(x, y); 
console.log(others); 

const [p, q = 5] = [10]; 
console.log(p, q); 
