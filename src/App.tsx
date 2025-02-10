import { useState } from 'react'
import './App.css'
import val1 from '../public/gifs/val1.gif'
import val2 from '../public/gifs/val2.gif'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-[#E72650] w-full max-h-screen px-2 font-montserrat text-[#FAF9F6] py-10'>
        <div className='flex flex-col'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className=''>Happy Valentines!</h1>
            <p>I wanted to create something that you can interact with instead of just asking you in person.</p>
            <p>So...</p>
            <div>
              <h1>Will You be My Valentine?</h1>
              <div className=''>
                <img src={val1} alt="" />
              </div>
              <div className=''>
                <img src={val2} alt="" />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div>Yes</div>
            <div>No</div>
          </div>
        </div>
      </div>
  )
}

export default App
