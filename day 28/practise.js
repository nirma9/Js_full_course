// /function 

function add(a,b){
               return a+b;
}

console.log(add(10,5));


const multiply = (a,b) => a*b;
console.log(multiply(10,3));


//scope and closures
function createcounter(){
               let count = 0;

               return function (){
                              count++;
                              return count;
               }
}

const counter = createcounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


//arrays and metods


const tasks = [
               {title: "HTML practis",done:true},
               {title: "Dom revision",done:true},
               {title: "js practis",done:false},
]

const titles = tasks.map(task => task.title);

console.log(titles);


//filter 

const completedtaks = tasks.filter(task => task.done)
console.log(completedtaks);


//redulce

const completedcount = tasks.reduce((total, task) => {
               return task.done ? total+1 : total;

} ,0);

console.log(completedcount)


//objects and destructuring
const student = {
               name :"Ravi",
               age: 22,
               course :"js"
};

console.log(student)


//destructuring

const {name,course}= student;
console.log([name,course]);


//es6 features 



const message = `welcome ${student.name} to ${student.course} ..`;
console.log(message);

//deafult parameters

function add(a = 0, b =0){
               return a+b;
}
console.log(add())





///error handling

function addtaks(title){
               if(!title){
                              throw new Error ("task title requried..");
               }return {title,done:false};
}

console.log(addtaks)



try{
               addtaks(" nirma");

}catch (err){
               console.log(err.message);
}finally{
               console.log("Execution finfihsed...")
}




//