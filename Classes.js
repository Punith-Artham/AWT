
class Demo {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, ${this.name}!`);  
    }
      greetArrow = () => {
      console.log(`Hello from Arrow Function, ${this.name}!`);
    }
      add = (a, b) => a + b;
  
    sayHi = () => console.log('Hi there!');
  }
  
  const d1 = new Demo('Alice');
  
  
  d1.greet();        
  d1.greetArrow();   
  console.log(d1.add(5, 3)); 
  d1.sayHi();      
  