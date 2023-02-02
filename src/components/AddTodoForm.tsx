import React from 'react'
import PrimaryBtn from './UI/PrimaryBtn'

const AddTodoForm = () => {

    return (
        <form className='p-4 py-8 flex flex-col gap-6 bg-gray-900 rounded-t-3xl absolute inset-x-8 bottom-0 z-20'>
            <input type="text" name="title" id="title" placeholder="What's Next?" className='placeholder-slate-600 border-b border-b-slate-400 outline-none pb-1 text-lg bg-transparent text-slate-300' />
            <input type="text" name="description" id="description" placeholder="Details.." className='border-b border-b-slate-400 outline-none placeholder-slate-600 pb-1 text-lg bg-transparent text-slate-300' />
            <input type="date" name="date" id="date" className='border-b border-b-slate-400  outline-none pb-1 text-lg bg-transparent text-slate-600' />
            <div className='flex justify-center'>
                <PrimaryBtn colors='shadow-blacks-900 text-gray-900 bg-green-300'>+</PrimaryBtn>
            </div>
        </form>
    )
}

export default AddTodoForm