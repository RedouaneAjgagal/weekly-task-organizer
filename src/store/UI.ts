import { createSlice } from '@reduxjs/toolkit'

const initialState: { addTodoIsOpen: boolean } = {
    addTodoIsOpen: false
}

const todoUiSlice = createSlice({
    name: 'todoUI',
    initialState,
    reducers: {
        openForm(state) {
            state.addTodoIsOpen = true
        },
        closeForm(state) {
            state.addTodoIsOpen = false
        },
    }
})
export const todoUiAction = todoUiSlice.actions;
export default todoUiSlice.reducer;