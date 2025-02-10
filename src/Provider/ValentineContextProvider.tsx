import { createContext, ReactNode, useContext, useState } from "react";




type ValentinesProviderProps = {
    children: ReactNode;
  };


const ValentineContext = createContext({});


export const ValentineContextProvider = ({children}: ValentinesProviderProps) => {

    const [valTime, setvalTime] = useState(true);
    const [no1, setNo1] = useState(true);
    const [no2, setNo2] = useState(true);
    const [no3, setNo3] = useState(true);
    const [no4, setNo4] = useState(true);

    return(
        <ValentineContext.Provider 
            value={{}}
        >
            {children}
        </ValentineContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useValentine = () => {
    const context = useContext(ValentineContext);
    return context
}

