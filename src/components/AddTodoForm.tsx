import React, { useRef } from 'react'
import PrimaryBtn from './UI/PrimaryBtn'
import { FaCheck } from 'react-icons/fa'
import { useAppDispatch } from './hooks/hooks'
import { todoAction } from '../store/todo'
import { todoUiAction } from '../store/UI'
const AddTodoForm = () => {
    const title = useRef<HTMLInputElement>(null);
    const details = useRef<HTMLInputElement>(null);
    const date = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const addTodoHanlder = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredValues = {
            title: title.current!.value,
            details: details.current!.value,
            date: date.current!.value
        }
        const todosValue = Object.values(enteredValues).filter(item => item.length === 0)
        if (todosValue.length > 0) return;
        const todo = {
            id: crypto.randomUUID(),
            completed: false,
            ...enteredValues
        }
        dispatch(todoAction.addTodo({ todo }));
        dispatch(todoUiAction.closeForm());
    }
    return (
        <form className='p-4 py-8 flex flex-col gap-6 bg-gray-900 rounded-t-3xl absolute inset-x-8 bottom-0 z-20' onSubmit={addTodoHanlder}>
            <input type="text" name="title" id="title" placeholder="What's Next?" className='placeholder-green-300/25 border-b border-b-green-300 outline-none pb-1 text-lg bg-transparent text-slate-300' ref={title} />
            <input type="text" name="description" id="description" placeholder="Details.." className='border-b border-b-green-300 outline-none placeholder-green-300/25 pb-1 text-lg bg-transparent text-slate-300' ref={details} />
            <input type="date" name="date" id="date" className='border-b border-b-green-300  outline-none pb-1 text-lg bg-transparent text-green-300/25' ref={date} />
            <div className='flex justify-center'>
                <PrimaryBtn colors='shadow-blacks-900 text-gray-900 bg-green-300'><FaCheck className='text-2xl' /></PrimaryBtn>
            </div>
        </form>
    )
}

export default AddTodoForm