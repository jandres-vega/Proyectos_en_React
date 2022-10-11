import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    
    const [ valueSearch, setValueSearch ] = useState( '' );
    
    const [openModal, setOpenModal] = useState(false);
    
    const completedTodos = todos.filter(item => !!item.completed).length;
    const totalTodos = todos.length;
    
    let searchTodos = [];
    
    if( valueSearch.length >= 1 ){
        searchTodos = todos;
    }else {
        searchTodos = todos.filter(item =>{
            const todoText = item.text.toLowerCase();
            const searchText = valueSearch.toLowerCase();
            return todoText.includes(searchText);
        })
    }
    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        })
        saveTodos(newTodos)
    }
    
    const handleCompletedTodos = (text) => {
        const todoIndex = todos.findIndex(item => item.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex] = {
            text: todos[todoIndex].text,
            completed: true
        }
        saveTodos(newTodos)
    }
    
    const deleteTodos = (text) => {
        const allTodos = todos.filter(item => item.text !== text)
        saveTodos(allTodos)
    }
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            valueSearch,
            setValueSearch,
            handleCompletedTodos,
            deleteTodos,
            searchTodos,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export  {TodoContext, TodoProvider};