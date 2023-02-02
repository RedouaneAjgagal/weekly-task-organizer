import React from 'react'
import PrimaryBtn from './UI/PrimaryBtn'
import { useAppDispatch } from './hooks/hooks';
import { todoUiAction } from '../store/UI';

const AddTodoBtn = () => {
    const dispatch = useAppDispatch()
    const openTodoFormHandler = (e: React.MouseEvent) => {
        dispatch(todoUiAction.openForm());
    }
    return (
        <div className='flex justify-center'>
            <PrimaryBtn onClick={openTodoFormHandler} colors='shadow-indigo-300 text-indigo-500'>+</PrimaryBtn>
        </div>
    )
}

export default AddTodoBtn