import { useNavigate } from "react-router-dom";
import shocked from '../../public/gifs/shocked1.gif'

export const AreYouSure = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pt-20 min-h-screen">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl pb-2">WOW. I'll give you another chance. Im sure it was a mistake</h1>
        <div className="w-[200px] h-[200px] ">
            <img src={shocked} alt="" className="w-full h-full"/>
        </div>


        <h2 className="text-3xl pt-2">Try Again</h2>
        <h2 className="text-3xl pt-2">Will you be my valentine?</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-2xl md:text-4xl py-6 text-center justify-center items-center">
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
