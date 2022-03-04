import React from 'react';
import ReactDOM from 'react-dom';
import Person from './components/person';
import CounterComponent from './components/counter';
import './index.css';
import CounterFn from './components/counter-fn';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
<div>

<CounterFn initial={12}></CounterFn>
{/* <Person name="JIll" id={300}/>

<Person name="John" id={400}/> */}

</div>,
document.getElementById('root'));
// means to render the react component content from person.tsx at root element where react is launched from index.html
