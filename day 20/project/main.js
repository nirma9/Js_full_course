import {format, APP_NAME} from './utils.js';
import {add,multiply} from './math.js';
const app = document.querySelector('#app');

app.innerHTML = `
<h1>${format(APP_NAME)}</h1>
<p>10+20 = ${add(10,20)}</p>
<p> 5*3 = ${multiply(5,3)}</p>`