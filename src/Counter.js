import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        counter: 0,
    };
    
    addOne = () => {
        this.setState({ counter:this.state.counter + 1 });
    }
    removeOne = () => {
        if(this.state.counter > 0){
        this.setState({ counter: this.state.counter - 1 })};
    }
    reset = () => {
        this.setState({ counter: this.state.counter = 0});
    }
   

    render() {
    return (
        <div className='container'>
            < div className={this.state.counter % 2 === 0 ? "even" : "odd" }
> <p>{this.state.counter}</p></div>
            <button onClick={this.addOne}>Add one</button>
            <button onClick={this.removeOne}> Remove one</button>
            <button onClick={this.reset}> Reset</button>

        </div>
    )
    
}
}

export default Counter;