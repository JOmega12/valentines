import { useState } from 'react'


import val1 from '../../public/gifs/val1.gif'
import val2 from '../../public/gifs/val2.gif'

export const ValentineDash = () => {
    return(
        <>        
            <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className=''>Happy Valentines!</h1>
            <p>I wanted to create something that you can interact with instead of just asking you in person.</p>
            <p>So...</p>
            <div className=''>
                <h1>Will You be My Valentine?</h1>
                <div className='h-[220px] w-[320px]'>
                    <img src={val1} alt="" className='h-full w-full object-cover'/>
                </div>
                <div className='h-[100px] w-[100px]'>
                    <img src={val2} alt="" className='h-full w-full object-cover'/>
                </div>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <div>Yes</div>
            <div>No</div>
            </div>
        </div>
        </>
    )
}