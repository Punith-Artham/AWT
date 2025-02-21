function getData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data1 = { name: "Alice", age: 25 };
        resolve(data1);
      }, 1000); 
    });
  }
  
    function getData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data2 = { city: "New York", country: "USA" };
        resolve(data2);
      }, 1500);     });
  }
  async function fetchData() {
    try {
      const data1 = await getData1();
      console.log("Received Data1:", data1);
      
      const data2 = await getData2();
      console.log("Received Data2:", data2);
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  fetchData();
  