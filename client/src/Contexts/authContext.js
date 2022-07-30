import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user' ,{});

    const onLogin = (data) =>{
        setUser(data);
    }

    const onLogout = () => {
        setUser({});
    }

    return (
        <authContext.Provider value={{user, onLogin, onLogout   }}>
            {children}
        </authContext.Provider>
    );
}