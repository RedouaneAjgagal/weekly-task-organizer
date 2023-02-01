import React from 'react'

const TodoDay = () => {
    return (
        <article className='flex items-end justify-between px-4'>
            <div className='flex items-end gap-6'>
                <h3 className='font-medium text-6xl text-sky-500'>16</h3>
                <div>
                    <p className='font-medium text-xl tracking-wide'>August</p>
                    <p className='tracking-wide text-lg'>2016</p>
                </div>
            </div>
            <p className='text-lg tracking-wide'>Monday</p>
        </article>
    )
}

export default TodoDay