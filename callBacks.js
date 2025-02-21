// Function to simulate fetching the first data
function getData1(callback) {
    setTimeout(() => {
      const data1 = { name: "Alice", age: 25 };
      callback(data1); // Pass the data to the callback
    }, 1000); // Simulated delay of 1 second
  }
  
  
  // Function to simulate fetching the second data
  function getData2(callback) {
    setTimeout(() => {
      const data2 = { city: "New York", country: "USA" };
      callback(data2); // Pass the data to the callback
    }, 1500); // Simulated delay of 1.5 seconds
  }
  
    getData1(function(data1) {
      console.log("Received Data1:", data1);
      
      // After Data1 is fetched, call getData2
      getData2(function(data2) {
        console.log("Received Data2:", data2);

      });
    });
  
  