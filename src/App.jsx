import { useState } from 'react'
import Album from './components/Album'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
//router
import { BrowserRouter } from 'react-router-dom'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />

      <Album />
      <Footer />

    </div>

  )
}

export default App
