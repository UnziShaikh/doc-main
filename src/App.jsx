import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>

      <Router>
        <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
          {/* Navbar */}
          {/* <Navbar /> */}
          <Navbar/>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About/>} />
          </Routes>
          {/* Footer */}
<Footer/>
        </div>
      </Router>
    </>
  )
}

export default App