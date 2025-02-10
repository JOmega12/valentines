import { useNavigate } from "react-router-dom";
import shocked from '../../public/gifs/shocked1.gif'

export const AreYouSure = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pt-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl pb-2">WOW. I'll give you another chance. Im sure it was a mistake</h1>
        <div className="w-[200px] h-[200px] ">
            <img src={shocked} alt="" className="w-full h-full"/>
        </div>


        <h2 className="text-3xl pt-2">Try Again</h2>
        <h2 className="text-3xl pt-2">Will you be my valentine?</h2>
      </div>
      <div className="px-155 flex flex-row justify-between items-center gap-2 text-4xl py-10">
        <div
          className="hover:text-amber-300 hover:border hover:border-amber-300 rounded-lg p-2 hover:cursor-pointer"
          onClick={() => navigate("/acceptance")}
        >
          Yes
        </div>
        <div
          className="hover:text-amber-400 hover:border hover:border-amber-400 rounded-lg p-2 hover:cursor-pointer"
          onClick={() => navigate("/lol-again")}
        >
          No
        </div>
      </div>
    </div>
  );
};
