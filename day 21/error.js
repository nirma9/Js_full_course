try{
               JSON.parse("bad json");
} catch(e){
               console.log("parse failed: ", e.message);
}


try{
               console.log(user.name);
}catch(e){
               console.log("Error caught: ",e.message);



}


try{
               let user = "Ravi";
               console.log(user);
}catch(e){
               console.log("Error caught: ",e.message);

}


//error obj 

try{
               JSON.parse("bad");
}catch(e){
               console.log(e.name);
               console.log(e.message);
               console.log(e.stack);
}



//throw

function checkage(age){
               if(age < 0){
                              throw new Error("age is cannot be negative..")
               } 
               return "valid age...";
}


try{
               checkage(-5);

}catch(e){
               console.log(e.message);
}


//empty username

function login(username){
               if(!username){
                              throw new Error("Username required....")
               }
               return "Login OK..."
}

try{
               console.log(login("Nirma"));
}catch(e){
               console.log(e.message);
}



//finally 



try{
               throw new Error("problem");
}catch(e){
               console.log("caught..");
}
finally{
               console.log("Always run...");
}



try{
               console.log("All good....");
}finally{
               console.log("Done....Always runs....")
}




//custom error

class validationerror extends Error{
               constructor(msg){
                              super(msg);
                              this.name = "validationerror";
               }
}

function validate(name){
               if(!name){
                              throw new validationerror("name required ...");
               }return "valid user...";
}


try{
               validate("");
}catch(e){
               console.log(e.name + " - " +e.message);
}

