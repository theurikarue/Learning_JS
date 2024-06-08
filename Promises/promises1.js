            // What is a Promise?
// Imagine you asked your friend to bake you a cake. 
//You don’t know exactly when the cake will be ready, 
//but your friend promises to either give you a delicious cake or tell you if something went wrong. 
//This is a bit like how promises work in JavaScript.
//A promise in JavaScript is like making a deal. 
//You ask JavaScript to do something, like fetch data from the internet, 
//and JavaScript promises to let you know when the task is done.
            // Key Concepts
// Pending: When you first make a promise, it’s like your friend starting to bake the cake. The cake isn't ready yet, and you’re waiting.
// Fulfilled: In JavaScript, this means the task you asked for is done successfully.
// Rejected:  In JavaScript, this means the task failed.

//"Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
//A Promise is an Object that links Producing code and Consuming code

            // Creating a Promise
let promise = new Promise((resolve, reject) => {
    let cakeIsReady = true;
            
    if (cakeIsReady) {
        resolve("Here is your cake!");
    } else {
        reject("Sorry, I couldn't bake the cake.");
                }    
});
            
promise.then((message) => {
    console.log(message);  
    }).catch((error) => {
    console.log(error);
    });
            
            