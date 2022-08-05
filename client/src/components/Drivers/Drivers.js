import { useContext, useState } from "react";

import { appContext } from "../../Contexts/appContext";
import { DriverList } from "../DriverList/DriverList";
import { Spinner } from "../Spinner/Spinner";
import styles from './Drivers.module.css';


export const Drivers = () => {
    const { drivers, isLoading } = useContext(appContext);
    
    if(isLoading) {
        return (
            <Spinner />
        );
    } else {
        return (
            <section id="dashboard-page" className={styles.dashboard}>
                <h1>Drivers</h1>

                <section>
                    <DriverList drivers={drivers}/>
                </section>
            </section>
        );
    }
}