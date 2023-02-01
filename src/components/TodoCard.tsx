import React from 'react'
import TodoDay from './TodoTime'
import TodoList from './TodoList'
import AddTodoBtn from './AddTodoBtn'

const TodoCard = () => {
    return (
        <section className="px-4 py-8 bg-white max-w-xl w-full flex flex-col gap-12 shadow-lg rounded-md">
            <TodoDay />
            <TodoList />
            <AddTodoBtn />
        </section>
    )
}

export default TodoCard