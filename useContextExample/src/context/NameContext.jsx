import React,{ createContext, useState } from 'react'

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
    const [lastName, setLastName] = useState("Roushan");

    return (
        <NameContext.Provider value={{lastName, setLastName}}>
            {children}
        </NameContext.Provider>
    )
}

