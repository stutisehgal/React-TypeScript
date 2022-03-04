// Promise has 2 functions - Promise() to resolve in case of success and Reject() to send a message of failure

let p= new Promise( (resolve, reject) => {
      x=10
      y=2

      setTimeout( ()=>{

      if(y != 0){
            resolve(x/y)
      }
      else{
        reject("Invalid divsion");
      }
    
}
)


//Using a promise

p.then(
    (result) => {console.log(result)},
    (error) => {console.log(error)}
)
