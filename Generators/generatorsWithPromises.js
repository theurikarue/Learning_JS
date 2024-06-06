const co = require('bluebird').coroutine;

// import { coroutine as co } from 'bluebird'
// Normal JS doesn't allow Imports and Exports in .js files. So, we use require() to import the necessary modules.

const getRandomUsers = co(function* (n) {
    const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`)
    const data = yield fetchRandomUsers.json();
    return data;
  });
  
  getRandomUsers(10).then(randomUsers => {
    randomUsers.results.forEach(user => {
      const {gender, email} = user;
      console.log(`${gender} - ${email}`);
    });
  }).catch(err => console.error(err));


