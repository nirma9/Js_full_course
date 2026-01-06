button.addevrntlistener("click",handleclick);


button.removeeventlistener("click",handleclick);

//2 common cause

let div = document.getElementById("box");
div = "null";

//common cause 3 

var data = [];

//performanace 

//very slow
for(let i = 0 ;i<1000;i++){
               document.body.innerHTML += "<p> Hello </p>";

}

//fast

let html = "";
for(let i = 1; i<1000;i++){
               html+="<p>Hello</p>"
}
document.body.innerHTML = html;

