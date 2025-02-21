function getData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data1 = { name: "Alice", age: 25 };
        resolve(data1);
      }, 1000);
    });
  }
  
    function getData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data2 = { city: "New York", country: "USA" };
        resolve(data2);
      }, 1500); 
    });
  }
  getData1()
    .then((data1) => {
      console.log("Received Data1:", data1);
        return getData2();    })
    .then((data2) => {
      console.log("Received Data2:", data2);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  