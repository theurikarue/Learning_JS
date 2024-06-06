const getRandom = function* (){
    yield 1;
    yield "hello";
    yield true;
    yield {name: "Alex"};
    return "I am done";
}


const numbersGen = getRandom();


console.log(numbersGen.next())
console.log(numbersGen.next());
console.log(numbersGen.next());
console.log(JSON.stringify(numbersGen.next()));
console.log(numbersGen.next());
//Output for the above code
// { value: 1, done: false }
// { value: 'hello', done: false }
// { value: true, done: false }
// {"value":{"name":"Alex"},"done":false}
// { value: 'I am done', done: true }


console.log(numbersGen.next().value)
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(JSON.stringify(numbersGen.next().value));
console.log(numbersGen.next().value);
//Output for the above code => Only returns the value of the generator function and doesn't tell us whether the generator is done
// 1
// hello
// true
// {"name":"Alex"}
// I am done
