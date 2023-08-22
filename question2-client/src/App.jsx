import { useState } from 'react'
import "tailwindcss/tailwind.css"
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import AllRoutes from './AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <div>
    <Router>
      <AllRoutes/>
    </Router>
   </div>
  )
}

export default App
