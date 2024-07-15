import React, { Component } from 'react';

interface CounterState {
  count: number;
}

interface CounterProps {}

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-xl mb-4">Count: {this.state.count}</p>
        <button 
          onClick={this.increment} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
