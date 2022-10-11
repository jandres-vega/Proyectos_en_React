import React from 'react';
import { useState } from 'react';
import '../styles/TodoSerach.css'

const TodoSearch = ({ valueSearch, setValueSearch  }) => {
    
    const handelSearch = ( e ) => {
        setValueSearch(e.target.value)
    }

    return (
        <input value={valueSearch} onChange={( e ) => handelSearch( e )} className="TodoSearch" placeholder="Cebolla"/>
    );
};

export default TodoSearch;