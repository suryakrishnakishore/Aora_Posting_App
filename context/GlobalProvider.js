import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({ children }) {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        
    })
    return (
        <GlobalContext.Provider
            value={{

            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}