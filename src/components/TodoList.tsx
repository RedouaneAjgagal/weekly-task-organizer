import React from 'react'
import TodoItem from './TodoItem'
import { useAppSelector } from './hooks/hooks'
const TodoList = () => {
    const { items } = useAppSelector(state => state.todoReducer);

    const todos = items.map(todo => <TodoItem key={todo.id} data={todo} />);

    return items.length === 0 ? <h2 className='text-center text-3xl'>Im So empty 😪</h2> : <ul className='p-4 flex flex-col gap-4 bg-white'>{todos}</ul>
}

export default TodoList