import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    
    return (
      <div onClick={onClick} className={item.isComplete === true ? "TodoItem-complete" : "TodoItem"}>
        <p>{item.title}</p>
      </div>
    )
  }
}

export default TodoItem;