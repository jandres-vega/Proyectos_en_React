import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = ( { text, completed, onComplete, deleteTodos } ) => {
    
    return (
        <li className="TodoItem">
            <span onClick={onComplete} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>√</span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span onClick={deleteTodos} className="Icon Icon-delete">X</span>
        </li>
    );
};

export default TodoItem;
