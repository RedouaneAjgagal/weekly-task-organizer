import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { todosType } from '../store/todo'
import { useAppDispatch } from './hooks/hooks'
import { todoAction } from '../store/todo'

interface Props {
    data: todosType
}

const TodoItem: React.FC<Props> = (props) => {
    const { title, details, date, completed, id, color } = props.data;
    const dispatch = useAppDispatch();
    const completeTodoHandler = () => {
        dispatch(todoAction.completeTodo({ id }))
    }
    const updatedData = new Date(date);
    const time = updatedData.toISOString().split('T')[1].substring(0, 5);
    const generatedColor = completed ? `solid 4px ${color}90` : `solid 4px ${color}`

    return (
        <li style={{ borderLeft: generatedColor }} className={`shadow-lg px-6 py-3 flex justify-between items-center leading-8 relative gap-4 md:px-8`}>
            <div className='flex flex-col gap-2'>
                <h2 className={`text-2xl font-semibold tracking-wide ${completed ? 'text-slate-500/80' : 'text-gray-800'} max-[375px]:text-lg`}>{title}</h2>
                <p className={`font-medium leading-normal ${completed ? 'text-slate-500/80' : 'text-gray-600'} max-[375px]:text-[.95rem]`}>{details}</p>
            </div>
            <p className={`text-xl ${completed ? 'text-slate-500/80' : 'text-gray-600'} max-[375px]:text-[.95rem]`}>{time}</p>
            <button onClick={completeTodoHandler} className={`absolute right-0 bottom-0 rounded-tl-full w-8 h-8 ${completed ? 'bg-sky-400' : 'bg-sky-400/30'}`}><FaCheck className='text-sm text-white absolute bottom-1 right-2' /></button>
        </li>
    )
}

export default TodoItem