import TodoItem from './TodoItem'
import { useAppSelector } from './hooks/hooks'
const TodoList = () => {
    const { items } = useAppSelector(state => state.todoReducer);

    // Display only todays todos
    const currentDate = new Date().toLocaleDateString();
    const todaysTodos = items.filter(item => {
        const addedItemTime = new Date(item.date).toLocaleDateString();
        if (currentDate === addedItemTime) {
            return item
        }
    });
    const todos = todaysTodos.map(todo => <TodoItem key={todo.id} data={todo} />);

    return <div className='p-4 -mt-24 relative'>
        {todaysTodos.length === 0 ? <h2 className='bg-white p-4 text-center text-3xl'>Im So empty 😪</h2> : <ul className='p-4 flex flex-col gap-4 bg-white'>{todos}</ul>}
    </div>
}

export default TodoList