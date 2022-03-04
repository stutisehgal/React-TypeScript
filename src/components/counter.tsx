import React from "react";
interface CounterProps {
    
}
 
interface CounterState {
    counter:number
}
 
class CounterComponent extends React.Component<CounterProps, CounterState> {
    state = { counter:0  } //initial state of counter number is 0
    increment=():void=>{
        let c:number=this.state.counter+1;
        this.setState({counter:c})
    }
    decrement=():void=>{
        let c:number=this.state.counter-1;
        this.setState({counter:c})
    }
    render() { 
        return (
        <div className='container'>
            <h2>{this.state.counter}</h2>
        <div>
            <button className="btn btn-success" onClick={this.increment}>Increment</button>
            <button className="btn btn-danger" onClick={this.decrement}>Decrement</button>
        </div>
        </div>);
    }
}
 
export default CounterComponent;