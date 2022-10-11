import React from 'react';
import '../styles/CreateTodoButton.css';

const CreateTodoButtom = ({setOpenModal, openModal}) => {
    
    const clickButton = () => {
        setOpenModal(preState => !preState)
    }
    
    return (
        <button onClick={clickButton} className="CreateTodoButton">+</button>
    );
};

export default CreateTodoButtom;