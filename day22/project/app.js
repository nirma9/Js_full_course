//basic console logs

console.log("Step 1 reached")
console.warn("Warning : check this logic");
console.error("Error: seomthing failed...");

//type bug 


function add(a,b){
               return a+b;
}

function multiply(x,y){
               console.log("Multuplying : ", x,y);   //breakpoint
               return x*y;
}

//performance time

function slowloop(){
               console.time("slowloop");
               for(let i = 0 ; i < 1000000; i++){

               }console.timeEnd("slowloop");
}


//event to run all demos

document.getElementById("runbtn").addEventListener("click", ()=> {
               const sum = add(2,"5");
               const result = multiply(sum,10);
               console.log("Final result: ",result);
               slowloop();
});