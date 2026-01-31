"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IContext{
    isNavOpen: boolean;
    setIsNavOpen:Dispatch<SetStateAction<boolean>>
}

const defaults: IContext= {
    isNavOpen : false,
    setIsNavOpen:()=>{}
}

export const UIContext = createContext(defaults)

const UIContextProvider = ({children}:{children:ReactNode}) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <UIContext.Provider value={{isNavOpen, setIsNavOpen}}>
      {children}
    </UIContext.Provider >
  )
}

export default UIContextProvider
