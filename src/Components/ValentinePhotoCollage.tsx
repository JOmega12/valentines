
import capy1 from '../../public/others/capyy.png'
export const ValentinePhotoCollage = () => {
    
    return(
        <div className='bg-black'>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className='flex flex-col pt-20'>
            <div>
                <h1>YAAYY</h1>
                <div>
                    <img src={capy1} alt="" />
                </div>
                <div>
                    <img src={capy1} alt="" className='scale-x-[-1]'/>
                </div>
            </div>
            </div>
        </div>
    )
}