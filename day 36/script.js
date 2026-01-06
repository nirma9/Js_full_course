//get request
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
.then(data => console.log(data))

//post 
fetch('https://jsonplaceholder.typicode.com/posts',{
               method: "POST",
               headers: {
                              "content-type": 'application/json',
               },
               body: JSON.stringify({name:"X"})
});

//put req

fetch('https://jsonplaceholder.typicode.com/posts/1',{
               method: 'PUT',
               headers: {'content-type':'application:json'},
               body: JSON.stringify({name:'updated item'})
});

//delete 

fetch('https://jsonplaceholder.typicode.com/posts/1',{
               method:"DELETE"
});
