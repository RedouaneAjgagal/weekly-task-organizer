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
});

export const todoUiAction = todoUiSlice.actions;
export default todoUiSlice.reducer;

const initialPagesState: { home: boolean, tasks: boolean } = {
    home: true,
    tasks: false
}
const pageSlice = createSlice({
    name: 'pages',
    initialState: initialPagesState,
    reducers: {
        openHome(state) {
            state.home = true;
            state.tasks = false;
        },
        openTasks(state) {
            state.home = false;
            state.tasks = true;
        }
    }
});

export const pageAction = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
