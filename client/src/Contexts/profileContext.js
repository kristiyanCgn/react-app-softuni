import { useState, useEffect, useContext } from "react";

import { createContext } from "react";
import { appContext } from "./appContext";
import * as profileService from '../services/profileService';

export const profileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const { isLoading, setIsLoading } = useContext(appContext);
    
    const [userDrivers, setUserDrivers] = useState([]);

    const deleteUserDriver = (recordId) => {
            setUserDrivers(state => state.filter(x => x._id !== recordId));
        }

    const addUserDriver = (recordData) => {
            setUserDrivers(recordData)
        }

    
    useEffect(() => {
        setIsLoading(true);
        profileService.getAll()
          .then(result => {
            setIsLoading(false);
            setUserDrivers(result)
          })
      }, [])

    return (
        <profileContext.Provider value={{ userDrivers, deleteUserDriver, addUserDriver }}>
            {children}
        </profileContext.Provider>
    );
}