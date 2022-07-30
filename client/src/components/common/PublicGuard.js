import { useContext } from "react"

import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../Contexts/authContext"


export const PublicGuard = () => {
    const { isAuthenticated } = useContext(authContext);

    if(isAuthenticated) {
        return <Navigate to='/' replace />
    }

    return <Outlet />
}