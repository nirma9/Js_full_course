"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// step 2: function with strich typing 
function registeruser(user) {
    return ` user ${user.name} registered successfully`;
}
//valid user obj
const newuser = {
    name: "nirma",
    age: 22,
    isadmin: false
};
//execute
console.log(registeruser(newuser));
//# sourceMappingURL=app.js.map