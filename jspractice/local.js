var a = 50
const b = 40 // 'const' keyword declares a constant variable
// b = 70 -> not allowed to assign new value to constant variable
function varTest()
{
    let a =30; // 'let' is a keyword which allows setting a variable value in local scope
    console.log(a)
}
console.log(a)
console.log(b)
console.log(varTest())

const nums = [23,45,56,67]
let nums1=[...nums,78] //copying an array to another
nums1[2]=99
console.log(nums1)

nums2=[...nums]
nums2[3]=89
console.log(nums2) 
console.log(nums)
