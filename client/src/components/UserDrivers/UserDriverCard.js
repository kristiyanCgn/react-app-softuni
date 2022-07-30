import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { authContext } from '../../Contexts/authContext';
import { profileContext } from '../../Contexts/profileContext';
import * as profileService from '../../services/profileService';
import './UserDriverCard.css';

export const UserDriverCard = ({ driver }) => {
    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const { deleteUserDriver } = useContext(profileContext);
    const isOwner = user._id == driver._ownerId

    const deleteHandler = async (driverId) => {
        const confirmation = window.confirm('Are you sure you want to delete this record?')

        if(confirmation) {
            await profileService.removeDriver(driverId);
            deleteUserDriver(driverId);
            navigate('/user-drivers');
        }
    }
    
    return (
        <li className="otherPet">
            <p className="img img-driver"><img src={driver.driverData.imageUrl} /></p>
            <h3>{driver.driverData.firstname}</h3>
            <h3>{driver.driverData.familyname}</h3>
            <p>Driver Number: #{driver.driverData.driverNumber}</p>
            <p>Nationality: {driver.driverData.nationality}</p>
            <p>Date Of Brith: {driver.driverData.dateOfBirth}</p>
            <p>Display Name: {driver.driverData.displayName}</p>
            <p>Description: {driver.driverData.description}</p>
            {isOwner
            ? 
            <>
            <button className="button">Edit</button>
            <button onClick={() => deleteHandler(driver._id)} className="button">Delete</button>
            </>
            : ''
            }
        </li>
    );
}