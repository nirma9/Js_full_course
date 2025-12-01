const arr = [1,2,3];
arr.push(4);
console.log(arr);


const last = arr.pop();
console.log(last);
console.log(arr);


arr.shift();
console.log(arr);

arr.unshift(10);
console.log(arr);

const arry = [10,20,30,40];
arry.splice(2,1,35);
console.log(arry);


// non-mutating methods

//splice()

const array = [1,2,3,4,5];
const port = array.splice(1,4);
console.log(port);


const a = [1,2];
const b = [3,4];
const c = a.concat(b);
console.log(c);

// Map()

const nums = [1,2,3,4,5];
const doubled = nums.map(x => x*2);
console.log(doubled)


//filter()
const evens = nums.filter(n => n%2 === 0);

console.log(evens)

// Find ()
const users = [{id:1},{id:2}];
const u = users.find( x => x.id === 2);
console.log(u)

//reduce()

const sum = nums.reduce((acc,cur) => acc + cur,0);
console.log(sum)


const ar = [1, 2, 3];
const newArr = [...ar, 4];
console.log(newArr);

//method chaining


const result = [1, 2, 3, 4, 5]
  .filter(x => x % 2 === 0)
  .map(x => x * 10);

console.log(result);