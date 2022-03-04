var Employee = /** @class */ (function () {
    function Employee(empid, name, salary) {
        this.empid = empid;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.show = function () {
        var allowance = this.salary * 0.1;
        console.log("Employee ID: " + this.empid);
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Allowance: ".concat(allowance)); // this.allowance will not be read as variable is not defined in constructor
    };
    return Employee;
}());
//let emp:Employee={empid:222,name:"Stuti",salary:25000}; cannot create objects like this in TypeScript as it asks for show() and other methods in class to be passed too which is not possible
var emp = new Employee(222, "Stuti", 25000);
emp.show();
