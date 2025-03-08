import './App.css'

import Home from './pages/Home/Home'
import CocoonResponsibility from './pages/Cocoon/CocoonResponsibility'
import CocoonStory from './pages/Cocoon/CocoonStory'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CocoonValues from './pages/Cocoon/CocoonValues'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='/cocoon/cau-chuyen-thuong-hieu' element={<CocoonStory />} />
          <Route path='/cocoon/gia-tri-cot-loi' element={<CocoonValues />} />
          <Route path='/cocoon/trach-nhiem-cong-dong' element={<CocoonResponsibility />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
