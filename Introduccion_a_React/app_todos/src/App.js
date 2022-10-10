import React from 'react';
import TodoCounter from'./components/TodoCounter';
import TodoList from'./components/TodoList';
import TodoSearch from './components/TodoSearch';
import CreateTodoButtom from './components/CreateTodoButtom';
import TodoItem from './components/TodoItem'
// import './App.css';
const todos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'completar curso de react', completed: false},
  {text: 'jugar futbol', completed: false}
]

const App = () => {
  return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <input placeholder="Cebolla" />
        <TodoList >
          {
            todos.map(item => (
                <TodoItem />
            ))
          }
        </TodoList>
        <CreateTodoButtom />
          <button>+</button>
      </React.Fragment>
  );
};

export default App;
