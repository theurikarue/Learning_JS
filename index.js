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



                                                




