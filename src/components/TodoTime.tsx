import React from 'react'

const TodoDay = () => {
    return (
        <article className='flex items-end justify-between px-4 bg-sky-500 rounded-md py-6'>
            <div className='flex items-end gap-6'>
                <h3 className='font-medium text-6xl text-orange-300'>16</h3>
                <div>
                    <p className='font-medium text-xl tracking-wider text-slate-50'>August</p>
                    <p className='tracking-wider text-lg text-slate-50'>2016</p>
                </div>
            </div>
            <p className='text-lg tracking-wider text-slate-50'>Monday</p>
        </article>
    )
}

export default TodoDay