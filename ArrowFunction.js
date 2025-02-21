// No parameters
const greet = () => console.log('Hello!');

// One parameter (parentheses optional)
const greetName = name => console.log(`Hello, ${name}!`);

// Multiple parameters
const add = (a, b) => a + b;

// Implicit return (for single expressions)
const multiply = (a, b) => a * b;




greet();              
greetName('Alice');   
console.log(add(2, 3)); 
console.log(multiply(3, 4));