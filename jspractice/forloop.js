nums = [12,23,34,45,56,67,78,89]
//for(i=0;i<nums.length;i++){ // used only for arrays
 //   console.log(nums[i])}

for(x of nums){
    console.log(x)
}

let student = {id:100,name:"Kumar",marks:68.5};
for(x in student)
{
    console.log(x, "is",student[x])
    // x is property name and student[x] gives property values of student
}