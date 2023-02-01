import React from 'react'

const TodoItem = () => {
    return (
        <li className='border-l-4 border-l-indigo-500 shadow-lg px-6 py-2 flex justify-between items-center leading-8'>
            <div>
                <h2 className='text-2xl font-medium tracking-wide'>Meeting</h2>
                <p className='text-gray-600 font-medium '>Room 408, east 2 layer</p>
            </div>
            <p className='text-gray-600 text-xl'>10:30</p>
        </li>
    )
}

export default TodoItem