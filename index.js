// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
// person.name = `Doe`
//   console.log(person.name) 
  
// const array = []
// array.push('John','Doe','New York')


                                  // Template literals 
// const name = 'Jane'
// const country = 'New York'
// const age= 33
// console.log("name "+ name +" country "+ country +" age "+ age ) 
// console.log(`name ${name.length} country ${country} age ${age}`)



                                // spread operators Array
// const array1 = [1,2,3,4,5]
// const array2 = [6,7,8,9,10]

// const ConcatArray = [...array1]
// console.log(ConcatArray)

// const ConcatArray2 = [...array1,...array2]
// console.log(ConcatArray2)

// ConcatArray2.forEach(function(number){
//   console.log(number)
// })

// const name = 'Theuri Bonface'
// const nameToArray = [...name]
// nameToArray.forEach(function(letter){
//   console.log(letter)
// })




                                // const addNumbers = function (x,y,z){
//   return x + y + z
// }
// const numbers = [1,5,6]
// const addition = addNumbers(...numbers)
// console.log(addition)





                                    // spread operators Object
// const address = { 
//   city : 'Nairobi',
//   country: 'Kenya',
//   postalCode: '00100'
// }
// const name = {
//   firstName:'Bonface',
//   lastName:'Theuri',
// }
// const person = {... name, ...address}
// console.log(JSON.stringify(person,null, 6))




                                    //Arrow Functions 
// const hello = function(){
//   const Es6 = 'ES6'
//   return `Hello ${Es6}`
// }
// const powers = [1,2,3,4,5].map(function(number,index){
//   return Math.pow(number,index)
// })
// const add = function(x,y){
//   return x+y
// }
// const milesToKm = function(miles){
//   return miles * 1.60934
// }
// console.log(hello())
// console.log(powers)
// console.log(add(10,45))
// console.log(milesToKm(566))

// // change all the above to arrow functions
// const hello1 = () =>{
//   const Es6 = 'ES6'
//   return `Hello ${Es6}` 
// }
// const powers1 = [1,2,3,4,5].map((number,index)=>Math.pow(number,index))
// const add1 = (x,y) => x+y
// const milesToKm1 = (miles)=>miles*1.60934
// const milesToKm2 = miles=>miles*1.60934
// console.log(hello1())
// console.log(powers1)
// console.log(add1(10,45))
// console.log(milesToKm1(566))


                                          // classes in JavaScript

// class Animal{
//   constructor(name,age){
//     console.log(`${name} is an animal and has been created` )
//     this.name = name
//     this.age = age
//   }

//   eat(){
//     console.log(`${this.name} is eating` )
//   }
//   sleep(){
//     console.log(`${this.name} is sleeping `)
//   }
//   wakeUp(){
//     console.log(`${this.name} is waking up `)
//   }
//   logAge(){
//     console.log(`${this.name} is ${this.age} years old`)
//   }
// }
// const Dog1 = new Animal("Bosco",5)
// Dog1.eat()
// Dog1.sleep()


//                                                 //Inheritance
// class Dog extends Animal{
//   constructor(name,age,breed){
//     super(name,age)
//     this.breed = breed 
//   }
//   DogBreed(){
//     console.log(`${this.name} is a ${this.breed} `)
//   }
//   DogAge(){
//     super.logAge()
//   }
// }
// const Dog2 = new Dog("BoscoDog", 10, "Labrador")
// Dog2.DogBreed()
// Dog2.DogAge()(



                                                //Promises
        
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

// let promise = new Promise((resolve, reject) => {
//     let cakeIsReady = true;

//     if (cakeIsReady) {
//         resolve("Here is your cake!");
//     } else {
//         reject("Sorry, I couldn't bake the cake.");
//     }
// });

// promise.then((message) => {
//   console.log(message);  
// }).catch((error) => {
//   console.log(error);
// });


// const getRandomUsers = n=>{
//   const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
//   fetchRandomUsers.then(data=>{
//     data.json().then(randomUsers =>{
//       console.log(JSON.stringify(randomUsers.results.length))
//       randomUsers.results.forEach(user =>{
//         const {gender,email} = user
//         console.log(`${gender}-${email}`) 
//       })
//     })
//   })
// }

// getRandomUsers(3)

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");