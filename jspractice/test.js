let str = `this is first line
this is second line
this is third line` // back quotes allow multi line strings
console.log(str)

let port = 8080
let empid = 100
let url = `http://localhost:${port}/employees/${empid}`
//let url = 'http://localhost:'+port+'/employees'+empid
console.log(url)