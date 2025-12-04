const arr = [10,20,30];
// const [a,b,c] = arr;

// console.log(a,b,c);

//array destructuring

const colors = ["red","Green","Blue"];
const [, second] = colors;
console.log(second);

//object desctructuring

const useer = {name : "Ravi", age : 22, city : "Delhi"};
const {name,age} = useer;
console.log(name,age);

//spread operator
const nums = [1,2,3,4,5,6];
const newnums = [ ...nums];
console.log(newnums);

//add values
const updated = [ ...nums, 6,7,8];
console.log(updated);

//merge values

const a = [10,20];
const b  = [30,40];
const finalarr = [...a ,...b];
console.log(finalarr);


//rest operator

function sum(...numbers){
               return numbers.reduce((a,b) => a+b);
}

console.log(sum(1,2,3,4,5,6,7));

function show(first , ...restvalues){
               console.log("First: ",first);
               console.log("Rest: ",restvalues);
}
show(10,20,30,40,50)

//object rest

const user = {names : "Ravi", age : 22, city : "Delhi"};
const {names, ...other} = user;
console.log(names);
console.log(other);




