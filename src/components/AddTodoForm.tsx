import React, { useRef } from 'react'
import PrimaryBtn from './UI/PrimaryBtn'
import { FaCheck } from 'react-icons/fa'
import { useAppDispatch } from './hooks/hooks'
import { todoAction } from '../store/todo'
import { todoUiAction } from '../store/UI'
import { currentFullTime, maxTime } from '../calc/time'
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
        const todosValue = Object.values(enteredValues).filter(item => item.length === 0 || item.trim() === '')
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
        <form className='p-4 py-8 flex flex-col gap-6 bg-gray-100 rounded-t-3xl absolute inset-x-4 bottom-0 z-20 shadow-[0_-50px_35px_-60px_rgb(0,0,0,1)]' onSubmit={addTodoHanlder}>
            <input type="text" name="title" id="title" placeholder="What's Next?" className='placeholder-slate-500 border-b border-b-slate-300 outline-none pb-1 text-lg bg-transparent text-slate-900' ref={title} />
            <input type="text" name="description" id="description" placeholder="Details.." className='border-b border-b-slate-300 outline-none placeholder-slate-500 pb-1 text-lg bg-transparent text-slate-900' ref={details} />
            <input type="datetime-local" name="date" id="date" className='border-b border-b-slate-300  outline-none pb-1 text-lg bg-transparent text-slate-500' ref={date} defaultValue={currentFullTime} min={currentFullTime} max={maxTime} />
            <div className='flex justify-center'>
                <PrimaryBtn colors='shadow-green-300 text-gray-900 bg-gray-100'><FaCheck className='text-2xl text-green-400' /></PrimaryBtn>
            </div>
        </form>
    )
}

export default AddTodoForm