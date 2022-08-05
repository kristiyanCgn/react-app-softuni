import { useContext } from "react";
import { appContext } from "../../Contexts/appContext";
import { Searchbar } from "../SearchBar/SearchBar";
import { DriverCard } from "./DriverCard/DriverCard";
import styles from './DriverList.module.css';

export const DriverList = ({drivers}) => {
   
    return (
        <>
            {drivers.length > 0
                ? ( 
                    <>
                    <Searchbar drivers={drivers} />
                    <ul>
                        {drivers.map(x => <DriverCard key={x.code} driver={x} />)}
                    </ul>
                    </>
                ) 
                : <p className={styles["no-drivers"]}>No drivers in database!</p>
            }
        </>
    );
}