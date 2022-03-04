//empid
//name
//salary
//display method
//setter method
//calculate allowance = 0.1

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    show(){
        console.log("Name: "+this.name)
        console.log("Age: "+this.age)
}
}

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age)
        this.salary = salary
    }

    show(){
        let allowance = this.salary*0.1
        super.show()
        console.log("Salary: "+this.salary) 
        console.log(`Allowance: ${allowance}`)  // this.allowance will not be read as variable is not defined in constructor

    }
}

let e = new Employee("Stuti",21,25000)
e.show()

