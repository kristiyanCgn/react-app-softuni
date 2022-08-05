import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { profileContext } from '../../Contexts/profileContext';
import styles from './EditUserDriverCard.module.css';
import * as profileService from '../../services/profileService';
import { authContext } from '../../Contexts/authContext';

export const EditUserDriverCard = () => {
    const { user } = useContext(authContext);
    const { addUserDriver } = useContext(profileContext);
    const navigate = useNavigate();
    const [currentProfile, setCurrentProfile] = useState([]);
    const { profileId } = useParams();

    useEffect(() => {
        profileService.getOne(profileId)
            .then(result => {
                setCurrentProfile(result)
            })
    }, [profileId])

    const onSubmit = async (e) => {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.target));
        currentProfile.driverData = newData;
        setCurrentProfile(currentProfile);
        await profileService.update(profileId, currentProfile);

        const newestList = await profileService.getAll();
        addUserDriver(newestList);


        navigate('/user-drivers')
    }

   let isOwner = currentProfile._ownerId === user._id;
   
    if(isOwner) {
    return (
        <div className={styles.container}>
            <form className={styles.editForm} onSubmit={onSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" defaultValue={currentProfile.newData?.driverData?.firstname || currentProfile.driverData?.firstname} />
                <label htmlFor="lname">Family Name</label>
                <input
                defaultValue={currentProfile.newData?.driverData?.familyname || currentProfile.driverData?.familyname}
                type="text"
                id="lname"
                name="familyname"
                />
                 <label htmlFor="dnumber">Driver Number</label>
                <input type="text" id="dnumber" name="driverNumber" defaultValue={currentProfile.newData?.driverData?.driverNumber || currentProfile.driverData?.driverNumber}/>

                <label htmlFor="nationality">Nationality</label>
                <input type="text" id="nationality" name="nationality" defaultValue={currentProfile.newData?.driverData?.nationality || currentProfile.driverData?.nationality}/>

                <label htmlFor="birthday">Date Of Birth</label>
                <input type="text" id="birthday" name="dateOfBirth" defaultValue={currentProfile.newData?.driverData?.dateOfBirth || currentProfile.driverData?.dateOfBirth}/>

                <label htmlFor="dname">Display Name</label>
                <input type="text" id="dname" name="displayName" defaultValue={currentProfile.newData?.driverData?.displayName || currentProfile.driverData?.displayName}/>

                <label htmlFor="imageUrl">Image</label>
                <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentProfile.newData?.driverData?.imageUrl || currentProfile.driverData?.imageUrl}/>

                <label htmlFor="subject">Description</label>
                <textarea
                defaultValue={currentProfile.newData?.driverData?.description || currentProfile.driverData?.description}
                id="description"
                name="description"
                placeholder="Write something.."
                style={{ height: 200 }}
                />
                <button type="submit">Edit</button>
            </form>
        </div>
    );
    } else {
        <Navigate to='/' />
    }
}