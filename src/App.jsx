import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { Navbar } from "./componenets/Navbar"
import { Footer } from "./componenets/Footer"

function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen w-full bg-light dark:bg-dark">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
