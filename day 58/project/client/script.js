function getsecuredata(){
               fetch("http://localhost:3000/secure-data")
               .then(res => res.json())
               .then(data => {
                              console.log(data.message);
                              console.log("Key status: ",data.apikeyused);
               });
}
