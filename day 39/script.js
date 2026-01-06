//flat
const nested = [[1,2,3],[2,4,5]];
const result = nested.flat();
console.log(result);

const deeparry = [1,[2,[3]]];
console.log(deeparry.flat(2));

// deeparry.flat(Infinity);

//flat map

const nums = [1,2,3];
const res = nums.flatMap( n => [n,n*2]);

console.log(res);


//break sent

const lines = ["I love js","crack coding"];
const reslt = lines.flatMap( line => line.split(" "));
console.log(reslt);


//evry 


console.log([2,3,6].every( n => n%2===0));

//some
console.log([2,3,6].some( n => n%2===0));
console.log([2,4,6].some( n => n%3===0));


//practise


const num = [1,2,3,4,5,6];
const resu = num.filter(n => n%2===0).map( n => n*n);
console.log(resu);



