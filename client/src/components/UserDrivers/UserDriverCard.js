import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { authContext } from '../../Contexts/authContext';
import { profileContext } from '../../Contexts/profileContext';
import * as profileService from '../../services/profileService';
import * as likeService from '../../services/likeService';
import styles from './UserDriverCard.module.css';

export const UserDriverCard = ({ driver }) => {
    const [likes, setLikes] = useState([])
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const { deleteUserDriver, addLike } = useContext(profileContext);
    const isOwner = user._id == driver._ownerId

    useEffect(() => {
        likeService.getProfileLikes(driver._id)
            .then(result => {
                setLikes(result)
            })
    }, [])


    const deleteHandler = async (driverId) => {
        const confirmation = window.confirm('Are you sure you want to delete this record?')

        if(confirmation) {
            await profileService.removeDriver(driverId);
            deleteUserDriver(driverId);
            navigate('/user-drivers');
        }
    }

    const likeHandler = async (e, {driver}) => {

        if(likes.some(x => x.profileId === driver._id)) {
            setError('You have already liked this profile')
            return;
        }

        e.currentTarget.className = styles.disabled;
        e.currentTarget.disabled = true;

        await likeService.like(driver._id)
        
        const upToDate = await likeService.getProfileLikes(driver._id)

        setLikes(upToDate);
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
            {likes
                ? <p>Likes: {likes.length}</p>
                : <p>Likes: 0</p>
            }
            {isOwner
            ?
            <>
            <Link to={`/user-drivers/${driver._id}/edit`} className={styles.button}>Edit</Link>
            <button onClick={() => deleteHandler(driver._id)} className={styles.button}>Delete</button>
            </>
            :
            <button className={styles.button} onClick={(e) => likeHandler(e, {driver})}>Like</button>
            }
            {error &&
                <span className={styles.errorMsg}>{error}</span>
            }
        </li>
    );
}