import TodoDay from './TodoTime'
import TodoList from './TodoList'
import AddTodoBtn from './AddTodoBtn'
import { useAppSelector } from './hooks/hooks'
import FormContainer from './FormContainer'

const TodoCard = () => {
    const { addTodoIsOpen } = useAppSelector(state => state.todoUiReducer);
    return (
        <main className="flex justify-center min-h-screen py-4 md:p-4">
            <section className="pb-8 bg-white max-w-xl w-full flex flex-col justify-between shadow-lg rounded-lg relative h-full min-h-[40rem] md:max-w-5xl">
                <div className='flex flex-col gap-8'>
                    <TodoDay />
                    <TodoList />
                </div>
                <AddTodoBtn />
                {addTodoIsOpen ? <FormContainer /> : null}
            </section>
        </main>
    )
}

export default TodoCard