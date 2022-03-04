class Employee{
    // class in TypeScript 
    empid:number;
    name:string;
    salary:number
    constructor(empid:number,name:string,salary:number)
    {
        this.empid=empid
        this.name=name
        this.salary=salary
    }
    show(){
        let allowance = this.salary*0.1
        console.log("Employee ID: "+this.empid)
        console.log("Name: "+this.name)
        console.log("Salary: "+this.salary) 
        console.log(`Allowance: ${allowance}`)  // this.allowance will not be read as variable is not defined in constructor

    }
}

//let emp:Employee={empid:222,name:"Stuti",salary:25000}; cannot create objects like this in TypeScript as it asks for show() and other methods in class to be passed too which is not possible

let emp:Employee = new Employee(222,"Stuti",25000); // object initiation in TypeScript is done via constructor of the class
emp.show()

