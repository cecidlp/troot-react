import { React, useContext, createContext, useState } from "react"

const GlobalContext = createContext();


export default function GlobalContextProvider({children}) {
    const [isSpanish, setIsSpanish] = useState(true);
    const handleChangeLanguage = () =>{
        setIsSpanish(!isSpanish)
      }

  return (
    <GlobalContext.Provider value={{isSpanish, handleChangeLanguage}}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)