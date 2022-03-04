function add(a,b){
    return a+b;
}

function sub(x,y){
    return x-y;
}

function operate(fn,a,b){
    //function takes function as an argument
    console.log(fn(a,b))
}

//var x = add; // function object is assigned to variable x
//var y = add(3,4); //result of function is assigned to variable y
var x = (a,b)=> a+b; // arrow functions - will return a+b

//console.log(add(3,4));
operate(x,10,20)

//operate((a,b)=> a-b)
operate(sub,34,12)

var noarg = () => "Hello World"; // arrow function with no arguments but returning a string
var onearg = (x) => x*x; 

