import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Brands1 from './components/Brands1'
import Brands2 from './components/Brands2'
import Brands3 from './components/Brands3'
import Shopping from './components/Shopping'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='b1' element={<Brands1 />} />
        <Route path='b2' element={<Brands2 />} />
        <Route path='b3' element={<Brands3 />} />
        <Route path='shop' element={<Shopping />} />
      </Routes>
      
    </div>
      
  )
}

export default App
// export { App as default }
