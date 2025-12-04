const person = {
               name: "ravi",
               age: 25,
               city : "Mumbai"
}

console.log(person);

console.log(person.name);

console.log(person["city"]);


//computed  property

const prop = 'score';
const player = {
  name: 'Anita',
  [prop + '_2025']: 98
};

console.log(player.score_2025);


//method & this

const user = {
               name:"ravi",
               greet : function(){
                              console.log("HI, i am " + this.name);
               },
               sayage(){
                              console.log("Age is " +this.age);
               },
               age:22
};

user.greet();
user.sayage();

const wrong = {
               name: "ravi",
               say : () => {
                              console.log(this.name);
               }
};

wrong.say();


//destructuring

const persons = {
               name: "ravi",
               age: 25,
               city : "Mumbai"
}
const {name,age} = person;
console.log(name,age);

//renaming default values

const {name:Fullname, country = "India"} = person;
console.log(Fullname,country);

//nested 

const data = {id: 1,profile : {email:"a@gamil.com",phone:"123"}};
const {profile: {email}} = data
console.log(email)



//key,values,entries
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));




///merge two objects 
const a = {name: "ravi",city : "Mumabi"};
const b = {age: 22,city: "pune"};
const merged = {...a, ...b};
console.log(merged);


//shollow copy 
const original = { name: 'Ravi', skills: ['js', 'html'] };
const copy = { ...original };



const copy2 = Object.assign({},original);

console.log(copy.skills === original.skills);

