// console.log("task1")
// console.log("task 2")
// console.log("task 3");


// console.log("strat")
// for(let i = 0; i< 10000000; i++){
// //                console.log(i);
// }

// console.log("end");



//async 
console.log("start");

setTimeout(()=> {
               console.log("middle");
},2000);

console.log("end");



// /fetch api 

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));