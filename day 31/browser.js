
// set timeout 

setTimeout(() => {
  console.log("after 1 second");
}, 1000);


// set interval
// setInterval(() => {
//   console.log("Running every 2 seconds");
// }, 4000);



fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));

