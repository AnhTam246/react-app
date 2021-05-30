import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import TodoItem from './components/todoItem/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem : "",
      currentFilter: "all", //all, active, complete
      todoItems: [
        { title:"Go to shcool", isComplete: true },
        { title:"Do homework" },
        { title:"Go to market" },
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  onItemClick(item) {
    return () => {
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

  onKeyUp(event) {
    let text = event.target.value;
    if(!text) {
      return;
    }

    text = text.trim();
    if(!text) {
      return;
    }

    if(event.keyCode === 13) {
      this.setState({
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ],
        newItem: ""
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  onFilter(status) {
    return () => {
      this.setState({
        currentFilter: status
      })
    }
  }

  render() {
    const { todoItems, newItem, currentFilter } = this.state;
    let itemsFilter = todoItems.filter((item) => {
      if(currentFilter === 'all') return item;
      if(currentFilter === 'active' && (item.isComplete === false || !item.isComplete)) return item;
      if(currentFilter === 'complete' && item.isComplete === true) return item;
    })

    return (
      <div className="App">
          <input type="text" placeholder="Add new item" onKeyUp={this.onKeyUp} value={newItem} onChange={this.onChange}/>
        {
          itemsFilter.map((item, index) => {
            return <TodoItem key={index} item={item} onClick={this.onItemClick(item)}/>
          })
        }
        <button type="button" onClick={this.onFilter("all")}>All</button>
        <button type="button" onClick={this.onFilter("active")}>Active</button>
        <button type="button" onClick={this.onFilter("complete")}>Complete</button>
      </div>
    );
  }
}

export default App;
