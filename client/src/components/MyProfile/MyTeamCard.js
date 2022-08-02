import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { appContext } from '../../Contexts/appContext'
import * as driverService from '../../services/driverService';

import styles from './MyTeamCard.module.css';

export const MyTeamCard = ({ myDriver, setMyTeam }) => {

    const onDeleteClick = async (driverId) => {
        const confirmation = window.confirm('Are you sure you want to delete this driver?')

        if(confirmation) {
            await driverService.removeDriver(driverId);
            setMyTeam(state => state.filter(x => x._id !== driverId));
        }
    }

    return (
        <li className={styles["my-profile-card"]}>
            <p className={styles["my-img-driver"]}><img src={myDriver.driver.imageUrl} /></p>
            <h2>{myDriver.driver.familyName}</h2>
            <button onClick={() => onDeleteClick(myDriver._id)} className={styles["delete-button"]}><FontAwesomeIcon icon={faTrashCan} /></button>
        </li>
    );
}