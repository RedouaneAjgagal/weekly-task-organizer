import { configureStore } from "@reduxjs/toolkit";
import UI from "./UI";
import todo from "./todo";
import { pageReducer } from "./UI";

const store = configureStore({
    reducer: { todoUiReducer: UI, todoReducer: todo, pageReducer }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;