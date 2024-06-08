// const getRandomUsers = n=>{
//     const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
//     fetchRandomUsers.then(data=>{
//       data.json().then(randomUsers =>{
//         console.log(JSON.stringify(randomUsers.results.length))
//         randomUsers.results.forEach(user =>{
//           const {gender,email} = user
//           console.log(`${gender}-${email}`) 
//         })
//       })
//     })
//   }
  
// getRandomUsers(3)


const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");