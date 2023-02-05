import { useState, useEffect } from 'react'
import { FaGripLines } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import logo from '../assets/logo.png';
import { useAppDispatch } from './hooks/hooks';
import { pageAction } from '../store/UI';
const NavbarContainer = () => {
    const dispatch = useAppDispatch()
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
    }, [isOpen]);

    const openHomeHandler = () => {
        dispatch(pageAction.openHome());
        setIsOpen(prev => !prev)
    }
    const openTaskHandler = () => {
        dispatch(pageAction.openTasks());
        setIsOpen(prev => !prev);
    }
    return (
        <>
            <button onClick={menuHandler} className={`text-[2rem] px-4 pt-1 pb-2 rounded-b-full transit relative z-40 ${isOpen ? 'bg-slate-700 text-white' : 'bg-white'} md:hidden`}>{isOpen ? <MdOutlineClose /> : <FaGripLines />}</button>
            <ul className={`${isOpen ? 'fixed top-0 min-h-screen z-30 w-full bg-white ease-in-out duration-300' : 'fixed -top-full min-h-full z-10 w-full bg-white ease-in-out duration-300'} flex flex-col justify-center items-center gap-4 md:top-0 md:flex-row md:min-h-fit md:py-4 md:relative md:max-w-7xl md:w-full md:px-4 md:bg-transparent md:border md:border-b-slate-200 md:border-t-0 md:gap-0`}>
                <li className='w-full flex justify-center'><button onClick={openHomeHandler} className='text-2xl font-medium uppercase tracking-wider w-full py-2 ease-out duration-300 hover:bg-gray-300 md:text-white md:hover:bg-indigo-400 md:capitalize'>Home</button></li>
                <li className='flex justify-center px-4'><img src={logo} alt="logo" className='w-full max-w-[8rem]' /></li>
                <li className='w-full flex justify-center'><button onClick={openTaskHandler} className='text-2xl font-medium uppercase tracking-wider w-full flex justify-center py-2 ease-out duration-300 hover:bg-gray-300 md:text-white md:hover:bg-indigo-400 md:capitalize'>planning</button></li>
            </ul>
        </>
    )
}

export default NavbarContainer