
import capy1 from '../../public/others/capyy.png'
export const ValentinePhotoCollage = () => {
    
    return(
        <div className='bg-black w-full h-min-screen'>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className='flex flex-col pt-20'>
            <div className='flex flex-col justify-content scale-x-[-1]'>
                <h1 className='text-8xl text-center'>YAAYY</h1>
                <div className='flex justify-center items-center mt-10'>
                    <div className='slide-in-left w-[500px] h-[500px]'>
                        <img src={capy1} alt="Right CapyBara" className='scale-x-[-1] w-full h-full'/>
                    </div>
                    <div className='slide-in-right w-[500px] h-[500px]'>
                        <img src={capy1} alt="Left CapyBara" className='w-full h-full'/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}