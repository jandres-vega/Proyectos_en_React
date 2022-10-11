import React, { useState } from 'react';
import AppUi from './AppUi'
const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'completar curso de react', completed: false},
  {text: 'jugar futbol', completed: false}
]

const App = () => {
    
    const localStorageTodos = localStorage.getItem('TODOS_V1');
    let parseTodos;
    
    if( !localStorageTodos ){
        localStorage.setItem('TODOS_V1', JSON.stringify([]));
        parseTodos = [];
    }else {
        parseTodos = JSON.parse(localStorageTodos);
    }
    
    const [todos, setTods] = useState(parseTodos);
    const [ valueSearch, setValueSearch ] = useState( '' );
    
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
    const saveTodos = (newTodos) => {
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V1', stringifyTodos);
        setTods(newTodos);
    }
    
    const handleCompletedTodos = (text) => {
        const todoIndex = todos.findIndex(item => item.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex] = {
            text: todos[todoIndex].text,
            completed: true
        }
        setTods(newTodos)
    }
    
    const deleteTodos = (text) => {
        const allTodos = todos.filter(item => item.text !== text)
        saveTodos(allTodos)
    }
    
  return (
      <AppUi
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          valueSearch={valueSearch}
          setValueSearch={setValueSearch}
          handleCompletedTodos={handleCompletedTodos}
          deleteTodos={deleteTodos}
          searchTodos={searchTodos}
      />
  );
};

export default App;
