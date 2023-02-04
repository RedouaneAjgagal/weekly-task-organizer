import img from '../assets/home-page.jpg'
const Home = () => {
    return (
        <main className="text-center flex flex-col items-center">
            <div className='flex flex-col items-center w-full max-w-4xl gap-6 mt-52 px-2 sm:px-4'>
                <h1 className='text-5xl uppercase font-medium text-white sm:text-6xl'>Weekly Task Organizer</h1>
                <p className='text-lg leading-relaxed text-slate-100 sm:text-xl sm:leading-relaxed'>Stay organized and track your weekly tasks with ease. Add, manage, and complete tasks with reminders. Start planning now!</p>
                <button className='tracking-wider font-medium uppercase py-3 px-16 bg-indigo-600 rounded text-white shadow-lg shadow-indigo-900 ease-in-out duration-300 hover:bg-white hover:text-indigo-700'>Start</button>
            </div>
        </main>
        
    )
}

export default Home