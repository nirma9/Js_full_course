async function getUser() {
  return "User Data";
}


//await
                              
const data = await fetch("https://jsonplaceholder.typicode.com/users");



async function getuser(){
               try{

              
               const res = await fetch("https://jsonplaceholder.typicode.com/users");
               const data = await res.json();
               return data;
               }catch(error){
                              console.log("error: ",error)
               }
}


getuser().then(user => console.log(user));



// try ....catch

async function getuser() {
               try{
                              const res = await fetch("https://jsonplaceholder.typicode.com/users");
                              const data = await res.json();
                              return data;
               }catch (error){
                              console.log("error: ",error);
               }
               
}

getuser().then(user => console.log(user));