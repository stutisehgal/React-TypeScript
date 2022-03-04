// creating a promise
let p =new Promise((resolve,reject)=> {
    x=10;
    y=0;
    setTimeout(() => 
    {if(y!=0){
        return (x/y);
    }
    else{
        reject("Invalid division");
    }
};
},10000
)


