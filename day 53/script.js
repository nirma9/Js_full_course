//selecting  elements

console.log("Js connect");

const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const notescontianer = document.getElementById("notesContainer");
//load notes

let notes = JSON.parse(localStorage.getItem("notes")) || [];

//display notes on scrren

function displaynotes(){
               notescontianer.innerHTML= "";
               notes.forEach((notes,index) => {
                              const div = document.createElement("div");
                              div.className = "note";

                              div.innerHTML = `<p> ${notes}</p>
                              <button onclick = "editnote(${index})">Edit</button>
                              <button onclick = "deletenotes(${index})">delete</button>
                              `;
                              notescontianer.appendChild(div);

                              
               });
}



//addnote

form.addEventListener("submit",function(e) {
               e.preventDefault();

               if(input.value === ""){
                              alert("write a note firs");
               return;
               }

               notes.push(input.value);

               localStorage.setItem("notes",JSON.stringify(notes));

               input.value= "";
               displaynotes();
});

//delete note

function deletenotes(index){
               notes.splice(index,1);
               localStorage.setItem("notes",JSON.stringify(notes));
               displaynotes();
}
//edit notes

function editnote(index){
               const updated = prompt("Edit  your note: " , notes[index]);

               if(updated !== null && updated !== ""){
                              notes[index] = updated;
                              localStorage.setItem("notes",JSON.stringify(notes));
                              displaynotes();
               }
}



// initial display

displaynotes();