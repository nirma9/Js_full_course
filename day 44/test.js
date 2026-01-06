import {add} from './math.js';

//AAA arrange act asser

function testadd(){

const a = 2;
const b = 3;

//act
const result = add(a,b);

//assert

if(result === 5){
               console.log("test passed : add works");
}else{
               console.error("test failed expected 5 but got: ", result)
}

}
testadd();