import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
    return (
        <h2 className="TodoCounter">{`Has completado ${completed} de ${total} TODOS`}</h2>
    );
};

export default TodoCounter;