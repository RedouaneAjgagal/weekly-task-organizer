import React from 'react'

const TodoDay = () => {
    const time = new Date();
    const currentTime = {
        day: time.toLocaleDateString('en-us', { day: 'numeric' }),
        month: time.toLocaleDateString('en-us', { month: 'long' }),
        year: time.toLocaleDateString('en-us', { year: 'numeric' }),
        weekDay: time.toLocaleDateString('en-us', { weekday: 'long' })
    }
    return (
        <article className='flex items-end justify-between px-4 bg-sky-500 rounded-md py-6'>
            <div className='flex items-end gap-6'>
                <h3 className='font-medium text-6xl text-orange-300'>{currentTime.day}</h3>
                <div>
                    <p className='font-medium text-xl tracking-wider text-slate-50'>{currentTime.month}</p>
                    <p className='tracking-wider text-lg text-slate-50'>{currentTime.year}</p>
                </div>
            </div>
            <p className='text-lg tracking-wider text-slate-50'>{currentTime.weekDay}</p>
        </article>
    )
}

export default TodoDay