class Student{
    salary = 5000 // local scope variables using 'let' keywork not allowed in a class
    //constructor(name,age,marks){
        //this.name = name;
        //this.age = age;
        //this.marks = marks;}

    constructor(name="Suresh",age=24,marks){ // a class cannot have more than 1 constructor
        this.name = name;
        this.age = age;
        //this.marks = marks;
    }
    show = () => {
        console.log("Name: "+this.name)
        console.log("Age: "+this.age)
        console.log("Marks :"+this.marks)
    }
}
let salary = 5000; // 'let' allowed outside the class body 
console.log(salary)

let s = new Student("Kumar",25) // since marks arent passed as a parameter in the Student class constructor, it will be undefined
s.show()

let s2 = new Student("Saha")
s2.show()

let s3 = new Student() // will take default values entered in the constructor
s3.show()