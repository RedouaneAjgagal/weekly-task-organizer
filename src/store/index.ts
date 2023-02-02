import { configureStore } from "@reduxjs/toolkit";
import UI from "./UI";
import todo from "./todo";

const store = configureStore({
    reducer: { todoUiReducer: UI, todoReducer: todo }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;