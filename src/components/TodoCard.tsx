import React from 'react'
import TodoDay from './TodoTime'
import TodoList from './TodoList'
import AddTodoBtn from './AddTodoBtn'
import AddTodoForm from './AddTodoForm'

const TodoCard = () => {
    return (
        <section className="px-4 py-8 bg-white max-w-xl w-full flex flex-col justify-between shadow-lg rounded-md relative h-full min-h-[40rem]">
            <div className='flex flex-col gap-8'>
                <TodoDay />
                <TodoList />
            </div>
            {/* <AddTodoBtn /> */}
            <AddTodoForm />
        </section>
    )
}

export default TodoCard