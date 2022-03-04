import { FunctionComponent, useEffect, useState } from "react";

interface CounterProps{
    initial:number
}

const CounterFn: FunctionComponent<CounterProps> = (props:CounterProps) => {
const [counter,setCounter] = useState<number>(0)

useEffect(
    ()=>{
        console.log(`Props received ${props.initial}`)
        console.log("Component mounted")
        setCounter(props.initial)
    }, [] // if empty array not given then every render will execute the useEffect
)

const increment = ():void =>{
    setCounter(counter+1);
};

const decrement = ():void =>{
    setCounter(counter-1);
};

return (
    <div className="container">
    <h2>{counter}</h2>
    <div>
      <button  className='btn-success' onClick={ increment}>increment
      </button>
      <button  className='btn-danger' onClick={ decrement}>decrement
      </button>
    </div>
    </div>
      );
}

export default CounterFn;
