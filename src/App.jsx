import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Brands1 from './components/Brands1'
import Brands2 from './components/Brands2'
import Brands3 from './components/Brands3'
import Shopping from './components/Shopping'
import MoneyboxPigB1 from './components/MoneyboxPigB1'
import MoneyboxN1B1 from './components/MoneyboxN1B1'
import MoneyboxN2B1 from './components/MoneyboxN2B1'
import BuffetStickerB2 from './components/BuffetStickerB2'
import SignStickerB2 from './components/SignStickerB2'
import MemesStickerB2 from './components/MemesStickerB2'
import NameStickerB2 from './components/NameStickerB2'
import GameStickerB2 from './components/GameStickerB2'
import FormBrands3 from './components/FormBrands3'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Brands1' element={<Brands1 />} />
        <Route path='Brands2' element={<Brands2 />} />
        <Route path='Brands3' element={<Brands3 />} />
        <Route path='Shopping' element={<Shopping />} />
        <Route path='MoneyboxPigB1' element={<MoneyboxPigB1 />} />
        <Route path='MoneyboxN1B1' element={<MoneyboxN1B1 />} />
        <Route path='MoneyboxN2B1' element={<MoneyboxN2B1 />} />
        <Route path='BuffetStickerB2' element={<BuffetStickerB2 />} />
        <Route path='SignStickerB2' element={<SignStickerB2 />} />
        <Route path='MemesStickerB2' element={<MemesStickerB2 />} />
        <Route path='NameStickerB2' element={<NameStickerB2 />} />
        <Route path='GameStickerB2' element={<GameStickerB2 />} />
        <Route path='FormBrands3' element={<FormBrands3 />} />
      </Routes>
      
    </div>
      
  )
}

export default App
// export { App as default }
