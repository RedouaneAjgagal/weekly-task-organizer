import React from 'react'
import TodoCard from "../components/TodoCard"
import Home from "../components/Home"
import { useAppSelector } from './hooks/hooks'

const MainContent = () => {
    const { home, tasks } = useAppSelector(state => state.pageReducer);

    return (
        <>
            {home ? <Home /> : null}
            {tasks ? <TodoCard /> : null}
        </>
    )

}

export default MainContent