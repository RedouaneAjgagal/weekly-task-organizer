import React from 'react'
import TodoDay from './TodoTime'
import TodoList from './TodoList'

const TodoCard = () => {
    return (
        <section className="p-4 bg-white max-w-xl w-full flex flex-col gap-12">
            <TodoDay />
            <TodoList />
        </section>
    )
}

export default TodoCard