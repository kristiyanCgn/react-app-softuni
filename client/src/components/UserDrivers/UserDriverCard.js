import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { authContext } from '../../Contexts/authContext';
import { profileContext } from '../../Contexts/profileContext';
import * as profileService from '../../services/profileService';
import styles from './UserDriverCard.module.css';

export const UserDriverCard = ({ driver }) => {
    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const { deleteUserDriver, addLike } = useContext(profileContext);
    const isOwner = user._id == driver._ownerId

    const deleteHandler = async (driverId) => {
        const confirmation = window.confirm('Are you sure you want to delete this record?')

        if(confirmation) {
            await profileService.removeDriver(driverId);
            deleteUserDriver(driverId);
            navigate('/user-drivers');
        }
    }

    const likeHandler = async (e, {driver}) => {

        if(isNaN(driver.likes)){
            driver.likes = 1;
        } else {
            driver.likes = driver.likes + 1;
        }
        e.currentTarget.className = styles.disabled;
        e.currentTarget.disabled = true;
        // await profileService.update(driver._id, driver)
        addLike(driver._id);
    }

    return (
        <li className={styles.profileDriver}>
            <p className={styles["img-driver"]}><img src={driver.newData?.driverData?.imageUrl || driver.driverData?.imageUrl} /></p>
            <h3>{driver.newData?.driverData?.firstname || driver.driverData?.firstname}</h3>
            <h3>{driver.newData?.driverData?.familyname || driver.driverData?.familyname}</h3>
            <p>Driver Number: #{driver.newData?.driverData?.driverNumber || driver.driverData?.driverNumber}</p>
            <p>Nationality: {driver.newData?.driverData?.nationality || driver.driverData?.nationality}</p>
            <p>Date Of Brith: {driver.newData?.driverData?.dateOfBirth || driver.driverData?.dateOfBirth}</p>
            <p>Display Name: {driver.newData?.driverData?.displayName || driver.driverData?.displayName}</p>
            <p>Description: {driver.newData?.driverData?.description || driver.driverData?.description}</p>
            <p>Likes: {driver?.likes}</p>
            {isOwner
            ?
            <>
            <Link to={`/user-drivers/${driver._id}/edit`} className={styles.button}>Edit</Link>
            <button onClick={() => deleteHandler(driver._id)} className={styles.button}>Delete</button>
            </>
            :
            <button className={styles.button} onClick={(e) => likeHandler(e, {driver})}>Like</button>
            }
        </li>
    );
}