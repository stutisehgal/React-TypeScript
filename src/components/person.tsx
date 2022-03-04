import React from "react";
import '../../src/App.css';

interface PersonProps{
    name:string;
    id:number;
    gender:string;    
}

interface PersonState{

    name:string;
    id:number;
    gender:string;
}

class Person extends React.Component<PersonProps, PersonState>
{
    state={ name:this.props.name,id:this.props.id,gender:this.props.gender}
    render() {
        return (<div className='container'>
        <h2>Hello, Welcome!</h2>)
        <h2>Details of Person</h2>
        <h3>Name:{this.props.name} <span><button>Click</button></span></h3>
        <p>ID: {this.props.id}</p>
        <p>Gender: {this.props.gender}</p>
        </div>
        );
    }
}

export default Person;