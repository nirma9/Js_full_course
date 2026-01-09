const sendbtn = document.getElementById("sendbtn");
const messageinput = document.getElementById("messageinput");

sendbtn.addEventListener("click" , () => {
               const message = messageinput.value.trim();

               if(!message) {
                              alert("pls type a message");
                              return ;
               }

               displaymessage("you" , message);
               messageinput.value="";


               fetchreply(message)
               .then(reply => displaymessage("Bot", reply))
               .catch(() => displaymessage("Bot","somthing went wrong"));
})