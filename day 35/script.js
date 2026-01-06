//dom 

const b = document.getElementById('btn');
b.textContent = "Ready";


//modern

const p = document.querySelector('.msg');
p.textContent = "welcome";


//node
const items = document.querySelectorAll('li');
items.forEach(item => {
               item.style.color = "blue";
});


// /create 
function additem(){
               const li = document.createElement('li')
               li.textContent = "new item";

               document.getElementById('list').appendChild(li);
}

function removeitem(){
               const list = document.getElementById("list");
               list.removeChild(list.lastElementChild);
};



//add evnt 

document.getElementById('btn1').addEventListener('click',function(){
               alert('Button clicked...')
})


document.getElementById('box').addEventListener('click',e => {
               console.log(e.target);
});


//bubbling

// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// parent.addEventListener('click' ,() => {
//                alert("parent clicked");
// });

// child.addEventListener('click', () => {
//                alert("child clicked...");
// });

//stop 
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click' ,() => {
               alert("parent clicked");
});

child.addEventListener('click', (e) => {
               e.stopPropagation();
               alert("child clicked...");
});



//form 

document.getElementById('form').addEventListener('submit', e => {
               e.preventDefault();
               const fd = new FormData(e.target);
               console.log(fd.get('email'));
})


//timer
const timerbtn = document.getElementById('timerbtn');
timerbtn.addEventListener('click' , () => {
               setTimeout(() => {
  console.log('After 2 second');
}, 2000);
})


//async await


async function loaddata() {
               try{
                              const res = await fetch("https://jsonplaceholder.typicode.com/users");
                              const data = await res.json();
                              console.log(data);

               }catch(err){
                              console.log(err);
               }

               
}

document.getElementById('load').addEventListener('click',loaddata);








