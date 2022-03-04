emp = {empid:100,name:"stuti",salary:25000}
// object creation in JS

console.log(emp.name)
// accessing properties of an object

emp1=emp.name='Amit'
// when we copy an object to another, instead of their properties being copied, the new object copies the reference of the original object
// no shallow copy so emp also changes when emp1 properties are changed
console.log(emp)

//object destructuring
emp1 = {... emp, gender:"Male"};
// true copy without reference is created
emp1.salary=0
console.log(emp.salary)
console.log(emp1.salary)

// creating object array
employees = [
    {empid:101,name:"neeti"},
    {empid:102,name:"pankaj"},
    {empid:103,name:"vani"},
    emp1
];
for (emp of employees){
    console.log(emp.name)
}

//var newlist = employees.filter(e=>e.salary>15000).map(e=>e.name)
// filter () function applied on an array of objects

var e = employees.find(x=>x.empid=103);

if(e==undefined){
    console.log("Employee not found")
}
else{
    console.log(e)
}