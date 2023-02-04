import TodoCard from "./components/TodoCard"
import NavbarContainer from "./components/NavbarContainer"
import Home from "./components/Home"

function App() {
  const bg = 'from-sky-600 to-indigo-400'
  return (
    <div className="flex flex-col  min-h-screen bg-hero bg-cover">
      <nav className="flex justify-center md:px-4">
        <NavbarContainer />
      </nav>

      {/* <TodoCard /> */}
      <Home />
    </div>
  )
}

export default App