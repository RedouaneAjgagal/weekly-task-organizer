import TodoCard from "./components/TodoCard"
import NavbarContainer from "./components/NavbarContainer"

function App() {
  return (
    <div className="bg-gradient-to-tl from-sky-600 to-indigo-400">
      <nav className="flex justify-center md:px-4">
        <NavbarContainer />
      </nav>
      <main className="flex justify-center min-h-screen py-4 md:p-4">
        <TodoCard />
      </main>
    </div>
  )
}

export default App