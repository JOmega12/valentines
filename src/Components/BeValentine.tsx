


// type ValentineType = {
//     ask: boolean | null
// }

import { useNavigate } from "react-router-dom";


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
        // whole speech about valentine
        // have asking question be yes or no 
        // if no ask again
        // if no x2 ask again but with different font
        // if no x3 ask again but with stylistic choice for yes (add are you sure?)
        // if no x4 ask again but with sassy attitude
        // if no x5 ask again but with no "no" button 

        // if yes, put things to do (if you can if short on time)
            // if short on time
            // add photos of us and tons of moving flowers
    )
}