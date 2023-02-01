import React from 'react'
import TodoItem from './TodoItem'
const TodoList = () => {
    return (
        <ul className='p-4 flex flex-col gap-4'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )
}

export default TodoList