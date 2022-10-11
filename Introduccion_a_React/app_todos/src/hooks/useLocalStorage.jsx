import React, { useEffect, useState } from 'react';

const UseLocalStorage = (itemName, initialValue) => {
    
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue);
    
    useEffect(()=> {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parseItem;
    
                if( !localStorageItem ){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parseItem = [];
                }else {
                    parseItem = JSON.parse(localStorageItem);
                }
    
                setItem(parseItem);
                setLoading(false);
            }catch( e ){
                setError(error)
            }
        }, 2000)
    }, [])
    
    const saveItem = (newTodos) => {
        try {
            const stringifyTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifyTodos);
            setItem(newTodos);
        }catch( e ){
            setError(error)
        }
    }
    return {
        item,
        saveItem,
        loading,
        error
    }
};

export default UseLocalStorage;