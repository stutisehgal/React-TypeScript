
function divide(x,y){

   return new Promise( (resolve, reject) => {
      
  
        setTimeout( ()=>{
  
        if(y != 0){
              resolve(x/y)
        }
        else{
          reject("Invalid divsion");
        }
    },5000)


    }
    )

}

divide(300,6).then(
    (result) =>{console.log(result)},
    (error)=> {console.log(error)}
)