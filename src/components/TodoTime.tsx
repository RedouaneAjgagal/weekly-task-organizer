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
        <article className='flex items-end justify-between rounded-t-md bg-gradient-to-bl from-sky-600 to-indigo-400 pt-10 pb-20 px-10 relative z-0 max-[375px]:px-4 md:px-24'>
            <div className='flex items-end justify-between w-full before:content-[""] before:w-20 before:h-20 before:bg-indigo-200/50 before:absolute before:bottom-0 before:left-0 before:rounded-tr-full before:shadow-[0px_-40px_0px] before:shadow-indigo-100/10 after:content-[""] after:w-20 after:h-20 after:bg-sky-200/50 after:absolute after:bottom-0 after:right-0 after:rounded-tl-full after:shadow-[0px_-40px_0px] after:shadow-sky-100/10 md:before:w-32 md:before:h-32 md:after:w-32 md:after:h-32'>
                <div className='flex items-end gap-6'>
                    <h3 className='font-medium text-7xl text-orange-300'>{currentTime.day}</h3>
                    <div>
                        <p className='font-medium text-2xl tracking-wider text-slate-50'>{currentTime.month}</p>
                        <p className='tracking-wider text-2xl text-slate-50'>{currentTime.year}</p>
                    </div>
                </div>
                <p className='text-2xl tracking-wider text-slate-50'>{currentTime.weekDay}</p>
            </div>
        </article>
    )
}

export default TodoDay