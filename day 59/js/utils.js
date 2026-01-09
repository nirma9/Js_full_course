function displaymessage(sender,message){
               const chatbox = document.getElementById("chatbox");

               const msgdiv = document.createElement("div");
               msgdiv.classList.add("message");

               msgdiv.innerHTML = `<strong> ${sender};</strong> ${message}`;

               chatbox.appendChild(msgdiv);

               chatbox.scrollTop = chatbox.scrollHeight;
}