const mypromis = new Promise((resolve,reject) => {
               let success = false ; 
               if(success){
                              resolve("data received successfully...");
               }else{
                              reject("Something went wrong...");
               }
});



//promise with .then ,.catch()
mypromis.then(result => {
               console.log(result);
})
.catch(error => {
               console.log(error);
});




//callback hell

// login(user , () => {
//                getprofile (() => {
//                               getposts (() => {
//                                              getcomments(() => {
//                                                             console.log("Done...")
//                                              });
//                               });
//                });
// });


//promise

// login()
// .then(getprofile)
// .then(getposts)
// .then(getcomments)
// .catch(error => console.log(error));


//eror handling;


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(Data => console.log(Data))
// .catch(err => console.log("error",err));



fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));


  fetch('https://jsonplaceholder.typicode.com/posts/1',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'x' })
});


