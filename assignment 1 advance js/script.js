
//Module A: 
//Question 1: The Server Verification Latency Simulator

function verifyUserCredentials(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "secret123") {
        resolve("Access granted successfully.");
     } else {
       reject("Security violation: Invalid credentials.");
      }
    }, 1500);
  });
}
verifyUserCredentials("admin", "secret123")
.then((Access)=>console.log(Access))
.catch((error)=>console.log(error))




//Question 2: Secure Electronic Payment Gateway

function executeSecureGatewayCall(transactionAmount) {
    return new Promise((resolve, reject) => {
        if (transactionAmount > 0) {
            setTimeout(() => {
                const randomId = Math.floor(Math.random() * 100000);
                resolve(`TXN-${randomId}`);
            }, 1000);
        } else {
            reject("Transaction failed: Null value detected.");
        }
   });
}
const amountInput = 250; 
executeSecureGatewayCall(amountInput)
.then((pass)=>console.log(pass))
.catch((fail)=>console.log(fail))
 .finally(() => console.log("Gateway connection terminated."));





//Module B:
//Question 3: Multi-Stage Document Metadata Pipeline

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        return response.json();
   })
   .then((post) => {
       console.log(`Title: ${post.title}`);
      return post.userId;
    })
    .then(userId => {
        console.log(`Associated User Account: ${userId}`);
   })
  .catch((error) => 
       console.error("Pipeline processing failed:", error));


//Question 4: Sequential Dependent API Requests

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => {
    return response.json();
  })
  .then(user => {
    console.log(`Account Name: ${user.name}`);
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
  })
  .then(response => {
    return response.json();
  })
 .then(todos => {
    console.log(`Total assigned to-do items: ${todos.length}`);
  })
  .catch(error => {
    console.error('An error occurred in the chain:', error.message);
  });





  
//Module C:
//Question 5: Isolated Dashboard Loader Profile

async function loadUserDashboardProfile() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/4'); 
    const user = await response.json();
    console.log(`Name: ${user.name}`);
   console.log(`City: ${user.address.city}`);
    console.log(`Company: ${user.company.name}`);
  } catch (error) {
    console.error("ERROR:", error);
  }
}
loadUserDashboardProfile();


//Question 6: Complex Task Data Aggregation Engine

async function compileSystemMetrics() {
  try {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
   const todos = await response.json();
    const incompleteTasks = todos.filter(task => task.completed === false);
    const count = incompleteTasks.length;
    console.log(`System Health Check -> Incomplete Workload Remaining: ${count} elements.`);   
  } catch (error) {
    console.error("Error:", error);
  }
}
compileSystemMetrics()

