import React from 'react';
import {useContext} from 'react';
import { TodoContext } from '../todoContext/index';
import '../styles/TodoSerach.css'

const TodoSearch = () => {
    
    const { valueSearch, setValueSearch  } = useContext(TodoContext)
    
    const handelSearch = ( e ) => {
        setValueSearch(e.target.value)
    }

    return (
        <div className="div_search">
            <input value={valueSearch} onChange={( e ) => handelSearch( e )} className="TodoSearch" placeholder="Cebolla"/>
        </div>
    );
};

export default TodoSearch;