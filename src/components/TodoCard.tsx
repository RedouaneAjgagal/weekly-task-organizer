import React from 'react'
import TodoDay from './TodoTime'
import TodoList from './TodoList'
import AddTodoBtn from './AddTodoBtn'
import AddTodoForm from './AddTodoForm'
import { useAppSelector } from './hooks/hooks'

const TodoCard = () => {
    const { addTodoIsOpen } = useAppSelector(state => state.todoUiReducer);
    return (
        <section className="px-4 py-8 bg-white max-w-xl w-full flex flex-col justify-between shadow-lg rounded-md relative h-full min-h-[40rem]">
            <div className='flex flex-col gap-8'>
                <TodoDay />
                <TodoList />
            </div>
            {addTodoIsOpen ? <AddTodoForm /> : <AddTodoBtn />}
        </section>
    )
}

export default TodoCard