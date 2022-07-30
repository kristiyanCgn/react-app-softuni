import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
            <p className="img img-driver"><img src={driver.newData?.driverData?.imageUrl || driver.driverData?.imageUrl} /></p>
            <h3>{driver.newData?.driverData?.firstname || driver.driverData?.firstname}</h3>
            <h3>{driver.newData?.driverData?.familyname || driver.driverData?.familyname}</h3>
            <p>Driver Number: #{driver.newData?.driverData?.driverNumber || driver.driverData?.driverNumber}</p>
            <p>Nationality: {driver.newData?.driverData?.nationality || driver.driverData?.nationality}</p>
            <p>Date Of Brith: {driver.newData?.driverData?.dateOfBirth || driver.driverData?.dateOfBirth}</p>
            <p>Display Name: {driver.newData?.driverData?.displayName || driver.driverData?.displayName}</p>
            <p>Description: {driver.newData?.driverData?.description || driver.driverData?.description}</p>
            {isOwner
            ? 
            <>
            <Link to={`/user-drivers/${driver._id}/edit`} className="button">Edit</Link>
            <button onClick={() => deleteHandler(driver._id)} className="button">Delete</button>
            </>
            : ''
            }
        </li>
    );
}