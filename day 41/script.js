// function user(name){
//                this.name = name;
// }
// user.prototype.login = function(){
//                console.log(this.name + "Logged in ");
// }


// //class
//  class user{
//                constructor(name){
//                               this.name = name;
//                }
//                login(){
//                               console.log(this.name + " logged in ");
//                }
//  }

 //class and constructor;
 //base class
  class animl{
               constructor(name){
                              this.name = name;
               }
               speak(){
                              console.log(this.name + " makess a sound..")
               }
  }


  const a1 = new animl("tiger");
  a1.speak();


  const a2 = new animl("lion");
  a2.speak();
  const a3 = new animl("cat");
  a3.speak();


  //inheritance

  //override

  class dog extends animl{
               speak(){
                              console.log(this.name + " barks");
               }
  }


  const d1 = new dog("Bruno");
  d1.speak();


  //no override

  class cat extends animl{}

  const c1 = new cat("Kitty");
  c1.speak();


  //super() 

  class dog extends animl{
               constructor(name,breed){
                             super(name);
                              this.breed = breed;
               }
  }



