import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ValentineDash } from './Components/ValentineDash'
import { TryAgain } from './Components/TryAgain'
import { AreYouSure } from './Components/AreyouSure'
import { ValentinePhotoCollage } from './Components/ValentinePhotoCollage'
import { FinalAsk } from './Components/FinalAsk'
import { BeValentine } from './Components/BeValentine'
import './photocollage.css';


function App() {

  return (
      <div className='bg-[#E72650] w-full min-h-screen px-2 font-montserrat text-[#FAF9F6]'>
        <Routes>
          <Route path='/' element={<ValentineDash />}></Route>
          <Route path='/you-sure' element={<AreYouSure />}></Route>
          <Route path='/lol-again' element={<TryAgain />}></Route>
          <Route path='/be-mine' element={<BeValentine />}></Route>
          <Route path='/final-ask' element={<FinalAsk />}></Route>
          <Route path='/acceptance' element={<ValentinePhotoCollage />}></Route>
          
        </Routes>
      </div>
  )
}

export default App
