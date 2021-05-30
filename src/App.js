import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title:"Go to shcool", isComplete: true },
        { title:"Do homework" },
        { title:"Go to market" },
      ]
    }
  }

  onItemClick(item) {
    
    //console.log(item);
    return (event) => {
      console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const { todoItems } = this.state;

    return (
      <div className="App">
        {
          todoItems.map((item, index) => {
            return <TodoItem key={index} item={item} onClick={this.onItemClick(item)}/>
          })
        }
      </div>
    );
  }
}

export default App;
