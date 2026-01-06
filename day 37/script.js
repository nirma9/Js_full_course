
const output = document.getElementById('output');
const api = 'https://jsonplaceholder.typicode.com/posts';

//get 
function loadpost(){
               fetch(api)
               .then(res => res.json())
               .then(data => {
                              output.textContent = JSON.stringify(data.slice(0,5),null,2);
               });
}

//post


function addposts(){
               fetch(api,{
                              method:"POST",
                              headers: {
                                             'content-type': 'application/json'
                              },

                              body : JSON.stringify({
                                             title: 'New post',
                                             body : 'learning API ',
                                             userid: 1
                              })
               })
               .then(res => res.json())
               .then(data => {
                              output.textContent = JSON.stringify(data,null,2);
               });
}


//upaddte 

function updateposts(){
               fetch(`${api}/1`,{
                              method:'PUT',
                              headers: {
                                             'content-type':'application/json'
                              },
                              body : JSON.stringify({
                                             title:'updated title',
                                             body: "POST updated",
                                             userid: 1
                              })

               })
               .then(res => res.json())
               .then(data => {
                              output.textContent = JSON.stringify(data,null,2);
               });
}


//delete 
function updateposts(){
               fetch(`${api}/1`,{
                              method:'DELETE'})
                              .then(() => {
                                             output.textContent = "post updated succesfully..";
                              });
               }
               
         
               
               //error
function testerror(){
                              fetch('https://jsonplaceholder.typicode.com/posts/999')
                              .then(res => {
                                             if(!res.ok){
                                                            throw new Error('something went wrong..');
                                             }return res.json();
                              })
                              .then(data => console.log(data))
                              .catch(err => {
                                             document.getElementById('output').textContent = err.message;
                              });
               }


