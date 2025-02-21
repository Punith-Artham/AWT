function varExample() {
    var x = 5; 
    if (true) {
      var x = 10;
      console.log("Inside block :", x); 
    }
    console.log("Outside block:", x); 
  }
  
  varExample();
  
  function letExample() {
    let y = 5;
    if (true) {
      let y = 10; 
      console.log("Inside block (let):", y); 
    }
    console.log("Outside block (let):", y); 
  }
  
  letExample();
  
  function constExample() {
    const z = 5;
    console.log("const value:", z);
    
    const obj = { name: "Alice" };
    obj.name = "Bob"; 
    console.log("Modified object:", obj.name);
  }
  
  constExample();