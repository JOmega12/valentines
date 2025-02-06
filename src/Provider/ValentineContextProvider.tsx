import { createContext, ReactNode, useContext } from "react";




type ValentinesProviderProps = {
    children: ReactNode;
  };


const ValentineContext = createContext({});


export const ValentineContextProvider = ({children}: ValentinesProviderProps) => {


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

