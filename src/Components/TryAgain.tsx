import { useNavigate } from "react-router-dom";
import hurt from '../../public/gifs/hurt1.gif'

export const TryAgain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pt-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl pb-2">
          Okay. Ouch. I didn't know you felt like that. Are you sure? 
        </h1>
        <div className="w-[300px] h-[200px] ">
            <img src={hurt} alt="" className="w-full h-full"/>
        </div>
        <h2 className="text-3xl pt-2">Try Again</h2>
        <h2 className="text-3xl pt-2">Will you be my valentine?</h2>
      </div>
      <div className="px-155 flex flex-row justify-between items-center gap-2 text-4xl py-10">
        <div
          className="hover:text-amber-300 hover:border hover:border-amber-300 rounded-lg p-2 hover:cursor-pointer text-center"
          onClick={() => navigate("/acceptance")}
        >
          Fuck Yes
        </div>
        <div
          className="hover:text-amber-400 hover:border hover:border-amber-400 rounded-lg p-2 hover:cursor-pointer text-center"
          onClick={() => navigate("/be-mine")}
        >
          LMAO No
        </div>
      </div>
    </div>
  );
};
