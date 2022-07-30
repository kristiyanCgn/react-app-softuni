import { useContext } from "react";
import { profileContext } from "../../Contexts/profileContext";

import { Spinner } from "../Spinner/Spinner";
import { UserDriverList } from "./UserDriverList";


export const UserDrivers = ({ isLoading }) => {
    const { userDrivers } = useContext(profileContext);
    
    if(isLoading) {
        return (
            <Spinner />
        );
    } else {
        return (
            <section id="dashboard-page" className="dashboard">
                <h1>Profiles</h1>
    
                <section>
                    <UserDriverList drivers={userDrivers}/>
                </section>
            </section>
        );
    }
}