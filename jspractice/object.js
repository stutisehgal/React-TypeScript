let obj = {a:12,b:21,c:32}
// let a = obj.a
// let b = obj.b

let{a,b,c}=obj

console.log(a)
console.log(b)
console.log(c)

let obj1 = {...obj,d:20,a:43} // assigning one object value to another and reassigning object element value
console.log(obj1)