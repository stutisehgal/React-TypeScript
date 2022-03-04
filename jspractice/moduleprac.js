import {Employee,name,add} from './emp.js';

import concat from './emp.js';
// no {} to be used in default export and import 

let e = new Employee("Stuti",21,25000)
e.show()

console.log(e.empid)
console.log(name)

console.log(add(10,20))
console.log(concat("Hello","World"))