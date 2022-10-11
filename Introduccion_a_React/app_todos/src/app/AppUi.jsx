import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../todoContext/index';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButtom from '../components/CreateTodoButtom';
import TodoForm from '../components/TodoForm';
import Modal from '../modal/index'

const AppUi = () => {
    
    const {
        error, loading, searchTodos, handleCompletedTodos, deleteTodos, openModal, setOpenModal
    } = useContext( TodoContext )
    
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && <p>Ups hubo un error....</p>}
                {loading && <p>Cargando....</p>}
                {(
                    ! loading && ! searchTodos.length ) && <p>Crea tu primer todo</p>}
                {
                    searchTodos.map( item => (
                        <TodoItem
                            key={item.text}
                            text={item.text}
                            completed={item.completed}
                            onComplete={() => handleCompletedTodos( item.text )}
                            deleteTodos={() => deleteTodos( item.text )}
                        />
                    ) )
                }
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
            <CreateTodoButtom
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
};

export default AppUi;