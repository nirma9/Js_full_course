const name = "Ravi";
const msg = `hello ${name}! Welcome to js`;
console.log(msg);


const city = "Delhi";
console.log(`i live in ${city}`);


//exp evaluation 
const a = 5;
const b = 10;
console.log(`sum = ${a + b}`);

const price = 100;
const tax = 18;
console.log(`total price  = ${price + tax/100}`);

console.log(`random number : ${Math.random()}`);


//multi line string
const msgs = `hello studnets ,
 welcome to the js course,
lets learn togteR!`
console.log(msgs);

const poem = `
Roses are red,
violets are blue,
coding is fun,
And so r YOu!`;
console.log(poem);


//functioncc calls inside literals

function greet(){
               return "Good Morning!";
}
console.log(`message : ${greet()}`);



function Fullname(){
               return "RAvi kumar";
}
console.log(`user: ${Fullname()}`);



//simple 

function greet(name = "Student"){
              console.log(`Hello ${name}`);
}
greet();
greet("Ravi");


function add(a = 0, b = 0){
               return a+b;
}

console.log(add());
console.log(add(5));
console.log(add(3,7));

//default with parameters

function multiply(a,b = a*2){
               return a*b;
}

console.log(multiply(5));


function power(num,exp = num){
               return num ** exp;

}
console.log(power(2));


//using function call

function getName(){
               return "Unknowm user";
}
function greet(name = getName()){
               console.log(`hello ${name}`);
}


greet();
greet("ravi");

function getdiscount(){
               return 10;
}

function finalproce(price,discount = getdiscount()){
               return price - discount;
}


console.log(finalproce(100));