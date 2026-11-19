import './index.css'
import Aulas from './components/Aulas'
import Desenvolvedor from './components/desenvolvedor'
import Home from './components/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/dev" element={<Desenvolvedor />} />
      </Routes>
    </BrowserRouter>
  )
}
