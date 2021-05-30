import React, { Component } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired, 
    isComplete: PropTypes.bool.isRequired
  }),
  onClick: PropTypes.func.isRequired
}

export default TodoItem;