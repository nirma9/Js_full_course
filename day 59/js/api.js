
function fetchreply(usermessage){
               return new Promise((resolve) => {
                              setTimeout(() => {
                                             const msg = usermessage.toLowerCase();
                                             let reply;

                                             if(msg.includes("hello") || msg.includes("hi")){
                                                            reply = "Hello! How r u today!";

                                             }else if(msg.includes("how are you")){
                                                            reply = "im doing great! what about you?"
                                             }else if(msg.includes("help")){
                                                            reply = "sure! Tell me what you need help with: ";
                                             }else if (msg.includes("bye")){
                                                            reply = "Goodbye! keep learning and building!.";
                                             } else{
                                                            reply = "Intresting !tell me more";
                                             }
                                             resolve(reply);
                              },1000);
               });
}