
import { useNavigate } from 'react-router-dom';
import capy1 from '../../public/others/capyy.png'
export const ValentinePhotoCollage = () => {
    

    const navigate = useNavigate();

    return(
        <div className='bg-black w-full h-min-screen'>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className='flex flex-col pt-20'>
            <div className='flex flex-col justify-content px-4 py-10 text-white'>
                <h1 className=' text-4xl md:text-8xl text-center'>YAAYY</h1>
                <h1 className='text-center text-2xl md:text-4xl'>Here's a Capybara :D</h1>
                <div className='flex flex-row justify-center items-center mt-10'>
                    <div className='slide-in-left w-[250px] md:w-[500px] h-[250px] md:h-[500px]'>
                        <img src={capy1} alt="Right CapyBara" className='scale-x-[-1] w-full h-full'/>
                    </div>
                    <div className='slide-in-right w-[250px] md:w-[500px] h-[250px] md:h-[500px]'>
                        <img src={capy1} alt="Left CapyBara" className='w-full h-full'/>
                    </div>
                </div>
            </div>
            <div className='text-center mt-10'>
                <h2 className='text-xl md:text-2xl'>If you want to see the other things I did, click here</h2>
                <button className='mt-4 px-6 py-2 bg-red-500 rounded-md hover:bg-red-700' onClick={()=> navigate('/')}>Here</button>
            </div>
            </div>
        </div>
    )
}