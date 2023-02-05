import NavbarContainer from "./components/NavbarContainer"
import MainContent from "./components/MainContent"

function App() {
  return (
    <div className="flex flex-col  min-h-screen bg-hero bg-cover gap-8">
      <nav className="flex justify-center md:px-4">
        <NavbarContainer />
      </nav>
      <MainContent />
    </div>
  )
}

export default App