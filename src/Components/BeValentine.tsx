
import { useNavigate } from "react-router-dom";
import boat1 from '../../public/gifs/cruise1.gif'
import boat2 from '../../public/gifs/cruise2.gif'


export const BeValentine = () => {

    const navigate = useNavigate();

      
    return(
        <div className="flex flex-col pt-20">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-8xl pb-2">
            WOW
          </h1>
          <h2 className="text-3xl pt-2">Did I hurt you? </h2>
          <h2 className="text-3xl pt-2">I'm sorry, please say yes</h2>
          <h2 className="text-3xl pt-2">I bought us tickets to the cruise</h2>
          <div className="flex flex-row gap-20">
            <div className="h-[250px] w-[250px]">
              <img src={boat1} alt="" className="w-full h-full"/>
            </div>
            <div className="h-[250px] w-[350px]">
              <img src={boat2} alt="" className="w-full h-full"/>
            </div>
          </div>
          <h2 className="text-5xl pt-2 border border-amber-300 text- center p-2 mt-3 rounded-2xl pb-3">Will you be my valentine?</h2>
        </div>
        <div className="px-155 flex flex-row justify-between items-center gap-2 text-4xl py-10">
          <div
            className="hover:text-amber-300 hover:border hover:border-amber-300 rounded-lg p-2 hover:cursor-pointer text-center text-6xl"
            onClick={() => navigate("/acceptance")}
          >
            Fuck Yes
          </div>
          <div
            className="hover:text-amber-400 hover:border hover:border-amber-400 rounded-lg p-2 hover:cursor-pointer text-center text-[10px]"
            onClick={() => navigate("/final-ask")}
          >
            LMAO No
          </div>
        </div>
      </div>
    )
}