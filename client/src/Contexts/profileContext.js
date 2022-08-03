import { useState, useEffect, useContext } from "react";

import { createContext } from "react";
import { appContext } from "./appContext";
import * as profileService from '../services/profileService';

export const profileContext = createContext();

export const ProfileProvider = ({ children }) => {

    
    const { isLoading, setIsLoading } = useContext(appContext);
    const [isLiked, setIsLiked] = useState(false);
    const [userDrivers, setUserDrivers] = useState([]);

    const deleteUserDriver = (recordId) => {
            setUserDrivers(state => state.filter(x => x._id !== recordId));
        }

    const addUserDriver = (recordData) => {
            setUserDrivers(recordData)
        }

    const addLike = (recordId) => {
        setUserDrivers(state => {
            let current = state.map(x => x._id === recordId)
            current.likes = current.likes + 1;
            return state.filter(x => x._id === recordId ? current : x)
        })
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
        <profileContext.Provider value={{ userDrivers, deleteUserDriver, addUserDriver, addLike }}>
            {children}
        </profileContext.Provider>
    );
}