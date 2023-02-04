import { useState, useEffect } from 'react'
import { FaGripLines } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'

const NavbarContainer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuHandler = () => {
        setIsOpen(prev => !prev)
    }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isOpen])

    const a = 'md:bg-indigo-300 md:shadow-lg md:shadow-indigo-600/25 md:text-white md:rounded-full md:hover:bg-indigo-400'
    return (
        <>
            <button onClick={menuHandler} className={`text-[2rem] px-4 pt-1 pb-2 rounded-b-full transit relative z-40 ${isOpen ? 'bg-slate-700 text-white' : 'bg-white'} md:hidden`}>{isOpen ? <MdOutlineClose /> : <FaGripLines />}</button>
            <ul className={`${isOpen ? 'fixed top-0 min-h-screen z-30 w-full bg-white ease-in-out duration-300' : 'fixed -top-full min-h-screen z-10 w-full bg-white ease-in-out duration-300'} flex flex-col justify-center items-center gap-4 md:top-0 md:flex-row md:min-h-fit md:py-4 md:relative md:max-w-7xl md:w-full md:px-4 md:bg-transparent md:border md:border-b-slate-200 md:border-t-0 md:gap-0`}>
                <li className='w-full'><a href="#" className='text-2xl font-medium uppercase tracking-wider flex justify-center py-2 ease-out duration-300 hover:bg-gray-300 md:text-white md:hover:bg-indigo-400 '>Home</a></li>
                <li className='w-full'><a href="#" className='text-2xl font-medium uppercase tracking-wider flex justify-center py-2 ease-out duration-300 hover:bg-gray-300 md:text-white md:hover:bg-indigo-400 '>planning</a></li>
                <li className='w-full'><a href="#" className='text-2xl font-medium uppercase tracking-wider flex justify-center py-2 ease-out duration-300 hover:bg-gray-300 md:text-white md:hover:bg-indigo-400 '>week's schedule</a></li>
            </ul>
        </>
    )
}

export default NavbarContainer