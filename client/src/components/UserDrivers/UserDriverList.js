import { UserDriverCard } from "./UserDriverCard";

import styles from './UserDriverList.module.css';


export const UserDriverList = ({drivers}) => {

    return (
        <>
            {drivers.length > 0
                ? (
                    <ul>
                        {drivers.map(x => <UserDriverCard key={x._id} driver={x} />)}
                    </ul>
                ) 
                : <p className={styles["no-drivers"]}>No drivers in database!</p>
            }
        </>
    );
}