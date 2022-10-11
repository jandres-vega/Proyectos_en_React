import React from 'react';
import { TodoContext } from '../todoContext';
import '../styles/todoForm.css'

const TodoForm = () => {
    
    const [value, setValue] = React.useState('')
    
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    
    const onChange = (e) => {
        setValue(e.target.value);
    }
    
    const onCancele = () => {
        setOpenModal(false)
    }
    
    const onAdd = (e) => {
        e.preventDefault()
        addTodo(value)
        setOpenModal(false)
    }
    
    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nueva tarea</label>
            <textarea onChange={(e) =>onChange(e)} value={value} placeholder="ingresa la tarea" />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancele}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit" >Añadir</button>
            </div>
        </form>
    );
};

export default TodoForm;