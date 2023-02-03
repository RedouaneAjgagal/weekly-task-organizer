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

    return todaysTodos.length === 0 ? <h2 className='text-center text-3xl'>Im So empty 😪</h2> : <ul className='p-4 flex flex-col gap-4 bg-white'>{todos}</ul>
}

export default TodoList