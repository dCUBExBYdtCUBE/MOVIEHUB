import './App.css';
import { Component } from 'react';

class MyClass extends Component {
    constructor(){
    super()
    this.state = {time: new Date()}
    //this.tick = this.tick.bind(this)
    }
    //tick()
    c=
    tick = () => { this.setState({time:new Date()}) }
    render(){ setInterval(this.tick,1000)
     return (<h1>{this.state.time.toLocaleTimeString()}</h1>)
    }
     }


export default MyClass;

