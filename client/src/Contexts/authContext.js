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

    const isAuthenticated = Boolean(user.email)

    return (
        <authContext.Provider value={{user, onLogin, onLogout, isAuthenticated }}>
            {children}
        </authContext.Provider>
    );
}