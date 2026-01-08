
//check browser support

if('serviceWorker' in navigator){
               navigator.serviceWorker.register('sw.js')
               .then(() => {
                              console.log("Service worker registered..");
               })

               .catch(error => {
                              console.log("service worker failed",error);
               });

}

//normal js code

document.getElementById("btn").addEventListener(
               "click",() => {
                              alert("PWA button working!.");
               }
);