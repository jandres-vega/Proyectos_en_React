import React from 'react';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButtom from '../components/CreateTodoButtom';

const AppUi = ({
    totalTodos,
    completedTodos,
    valueSearch,
    setValueSearch,
    searchTodos,
    handleCompletedTodos,
    deleteTodos
    
}) => {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
            />
            <TodoList >
                {
                    searchTodos.map(item => (
                        <TodoItem
                            key={item.text}
                            text={item.text}
                            completed={item.completed}
                            onComplete={() => handleCompletedTodos(item.text)}
                            deleteTodos={() => deleteTodos(item.text)}
                        />
                    ))
                }
            </TodoList>
            <CreateTodoButtom />
        </React.Fragment>
    );
};

export default AppUi;