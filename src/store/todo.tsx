import { createSlice } from '@reduxjs/toolkit'

export type todosType = {
    id: string,
    title: string,
    details: string,
    date: string,
    completed: boolean,
    color: string
}
const todos: todosType[] = localStorage.todos ? JSON.parse(localStorage.todos) : [];
const initialState: { items: todosType[] } = {
    items: todos
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.items = [...state.items, action.payload.todo]
            localStorage.setItem('todos', JSON.stringify(state.items))
        },
        completeTodo(state, action) {
            const updatedTodos: todosType[] = state.items.map(todo => {
                if (action.payload.id === todo.id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            });
            state.items = [...updatedTodos];
            localStorage.setItem('todos', JSON.stringify(state.items))
        }
    }
});

export const todoAction = todoSlice.actions;
export default todoSlice.reducer;