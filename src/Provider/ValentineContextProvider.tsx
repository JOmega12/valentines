import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type valentineType ={
    isValentine: boolean;

}

type ValentinesProviderProps = {
    isValentine: valentineType | null;
    setIsValentine: Dispatch<SetStateAction <valentineType |null >>

};

const ValentineContext = createContext<ValentinesProviderProps | undefined>(undefined);

export const ValentineContextProvider = ({children}: {children: ReactNode}) => {

    const [isValentine, setIsValentine] = useState<valentineType | null>(null);
    return(
        <ValentineContext.Provider 
            value={{isValentine, setIsValentine}}
        >
            {children}
        </ValentineContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useValentine = () => {
    const context = useContext(ValentineContext);
    if (!context) {
        throw new Error("useValentine must be used within a ValentineContextProvider");
    }
    return context
}

