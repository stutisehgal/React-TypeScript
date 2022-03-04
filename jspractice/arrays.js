
nums = [12,65,87,34,10,90,23,14]
console.log(nums)

nums.splice(2,2,100,200,300)
// splice removes elements from an array and replaces them with given values
console.log(nums)

var newarr = nums.filter(x => x%2 == 0);
// filter function is useful in performing operations without writing whole functions to do an operation
console.log(newarr)

console.log(nums.find(x=> x>70))
// find() function returns the first element satisfying the condition
// find() returns Undefined if element satisfying condition is not found
// findIndex() function returns the find() element's position

doubles = nums.map(x=> x*2)
// map() returns array with transformed data
console.log(doubles)

//push()
//pop()
//shift()
