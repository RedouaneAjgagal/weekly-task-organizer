import React from 'react'
import AddTodoForm from './AddTodoForm'
import Overlay from './UI/Overlay'
import { useAppDispatch } from './hooks/hooks'
import { todoUiAction } from '../store/UI'



const FormContainer = () => {
    const dispatch = useAppDispatch();
    const closeFormHandler = () => {
        dispatch(todoUiAction.closeForm());
    }
    return (
        <>
            <Overlay onClick={closeFormHandler} />
            <AddTodoForm />
        </>
    )
}

export default FormContainer