
import { useNavigate } from "react-router-dom";
import endGoal from '../../public/gifs/finally.gif'


export const FinalAsk = () => {
    

    const navigate = useNavigate();

    return(
        <div className="flex flex-col pt-20">
            <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-8xl pb-2">
                Final Ask.
            </h1>
            <h2 className="text-5xl pt-2 border border-amber-300 text- center p-2 mt-3 rounded-2xl pb-3">Will you be my valentine?</h2>
            <div className="h-[200px] w-[300px] mt-6">
                <img src={endGoal} alt="" className="h-full w-full"/>
            </div>
            </div>
            <div className="px-155 flex flex-row justify-between items-center gap-2 text-4xl py-10">
            <div
                className="hover:text-amber-300 hover:border hover:border-amber-300 rounded-lg p-2 hover:cursor-pointer text-center text-6xl"
                onClick={() => navigate("/acceptance")}
            >
                OMG. Fuck Yes
            </div>
            </div>
      </div>
    )
}