function animl(name){
               this.name = name;
};

animl.prototype.speak = function(){
               console.log( this.name  + "makes a sound..");
}

//obj

const dog = new animl("Bruno.");
dog.speak();

//instance of

 console.log(dog instanceof animl);



 //exmaple

 function person(name){
               this.name = name;
 }
 person.prototype.introduce = function(){
               console.log(
                              "HI I am " + this.name
               );
 };


 //obj 
 const p1 = new person("Nirma");
 p1.introduce();

 console.log(p1 instanceof person);


 //class

 class animal{
               constructor(name){
                              this.name = name;
               }
               speak(){
                              console.log(this.name  + "Makes a sound..");
               }
 }



 const Dog = new animal("cat");
 

 Dog.speak();


//  animal.prototype.speak = function(){..}

//proof

console.log(Dog.__proto__ === animal.prototype);




