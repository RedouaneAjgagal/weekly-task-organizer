import { createSlice } from '@reduxjs/toolkit'
export type todosType = {
    id: string,
    title: string,
    details: string,
    date: string,
    completed: boolean
}
const initialState: { items: todosType[] } = {
    items: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.items = [...state.items, action.payload.todo]
        }
    }
});

export const todoAction = todoSlice.actions;
export default todoSlice.reducer;