//step 1: define data structire
type user = {
               name:string;
               age:number;
               isadmin: boolean;
};

// step 2: function with strich typing 

function registeruser(user:user):string{
               return ` user ${user.age} registered successfully`;


}


//valid user obj

const newuser:user = {
               name: "nirma",
               age:22,
               isadmin:false
};

//execute
console.log(registeruser(newuser));
