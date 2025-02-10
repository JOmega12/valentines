

import { useNavigate } from 'react-router-dom'
import val1 from '../../public/gifs/val1.gif'
import val2 from '../../public/gifs/val2.gif'

export const ValentineDash = () => {

    const navigate = useNavigate();
    return(
        <div className='flex flex-col pt-20'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-4xl pb-2'>Happy Valentines!</h1>
                <p className='py-2 text-2xl'>I wanted to create something that you can interact with instead of just asking you in person.</p>
                <p className='py-2 text-2xl'>So...</p>
                <div className='py-2'>
                    <h1 className='pb-4 text-4xl border-2 border-b-blue-300 rounded-lg'>Will You be My Valentine?</h1>
                    <div className='flex gap-2 py-4'>
                        <div className='h-[200px] w-[320px]'>
                            <img src={val1} alt="" className='h-full w-full object-cover'/>
                        </div>
                        <div className='h-[200px] w-[300px]'>
                            <img src={val2} alt="" className='h-full w-full object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-155 flex flex-row justify-between items-center gap-2 text-4xl py-10'>
                <div className='hover:text-amber-300 hover:border hover:border-amber-300 rounded-lg p-2 hover:cursor-pointer' onClick={()=>navigate('/acceptance')}>Yes</div>
                <div className='hover:text-amber-400 hover:border hover:border-amber-400 rounded-lg p-2 hover:cursor-pointer' onClick={() => navigate('/you-sure')}>No</div>
            </div>
        </div>
    )
}