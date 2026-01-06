const orignl = {name: "Aman",skilss:["HTML","JS"]};
const copy = {...orignl};

copy.skilss.push("CSS");
console.log(orignl.skilss)

console.log(copy.skilss);

// shallow copy
const arr1 = [[1,2],[3,4]];
const arr2 = [...arr1];
arr2[0].push(99);
console.log(arr1)


//deep copy
const orignal = {name: "aman",skills:["js"]};
const deepcopy = JSON.parse(JSON.stringify(orignal));
deepcopy.skills.push("CSS");
console.log(orignal.skills);

//nested 

const data1 = {a: {b:10}};
const data2 = JSON.parse(JSON.stringify(data1));
data2.a.b = 50;
console.log(data1.a.b);


//structured clone

const obj1 = {x:10,y:[1,2]};
const obj2 = structuredClone(obj1);

obj2.y.push(3);
console.log(obj1.y);

console.log(obj2.y);


const state = {
               user:{name:"Nirma"},
               loggedin:true
};

const newstate = structuredClone(state);
newstate.user.name = "riya";


console.log(newstate);
console.log(state);




//mutable way   

// let arr = [1,2,3];
// arr.push(4);
// console.log(arr)


//immutable way

let arr = [1,2,3];
let newarr = [...arr,4];
console.log(newarr);
console.log(arr)


// obj immuta

const user = {name:"Aman",age:20};
const newuser = {...user,age:21};

console.log(newuser);
console.log(user);


console.log([2, 4, 6].every(n => n % 2 === 0));