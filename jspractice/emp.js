class Employee{
    constructor(name,age,salary)
    {
        this.name=name
        this.age=age
        this.salary=salary
    }
    show(){
        let allowance = this.salary*0.1
        console.log("Name: "+this.name)
        console.log("Age: "+this.age)
        console.log("Salary: "+this.salary) 
        console.log(`Allowance: ${allowance}`)  // this.allowance will not be read as variable is not defined in constructor

    }
}

const name = "Stuti"

let add=(a,b)=> a+b;

let operate=(a,b)=>a+b;

export {Employee,name,add}

export default operate;
// ONLY ONE DEFAULT EXPORT IS ALLOWED