import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { profileContext } from '../../Contexts/profileContext';
import styles from './EditUserDriverCard.module.css';
import * as profileService from '../../services/profileService';
import { authContext } from '../../Contexts/authContext';
import { URL_PATTERN, NUMBER_PATTERN } from '../../const'; 


export const EditUserDriverCard = () => {
    const { user } = useContext(authContext);
    const { addUserDriver } = useContext(profileContext);
    const navigate = useNavigate();
    const [currentProfile, setCurrentProfile] = useState([]);
    const { profileId } = useParams();

    const [fnameError, setFnameError] = useState(null)
    const [famnameError, setFamnameError] = useState(null)
    const [nationalityError, setNationalityError] = useState(null)
    const [driverNumberError, setDriverNumberError] = useState(null)
    const [birthError, setBirthError] = useState(null)
    const [displayNameError, setDisplayNameError] = useState(null)
    const [imageError, setImageError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)

    useEffect(() => {
        profileService.getOne(profileId)
            .then(result => {
                setCurrentProfile(result)
            })
    }, [profileId])

    const onSubmit = async (e) => {
        e.preventDefault();

        if(fnameError || famnameError || nationalityError || driverNumberError || birthError || displayNameError || imageError || descriptionError) {
            return;
        }

        const newData = Object.fromEntries(new FormData(e.target));
        currentProfile.driverData = newData;
        setCurrentProfile(currentProfile);
        await profileService.update(profileId, currentProfile);

        const newestList = await profileService.getAll();
        addUserDriver(newestList);


        navigate('/user-drivers')
    }

    const firstNameCheck = (value) => {
        if (value.length < 2) {
            setFnameError('This field should be at least 2 characters!')
        } else {
            setFnameError(null)
        }
    }

    const familyNameCheck = (value) => {
        if (value.length < 2) {
            setFamnameError('This field should be at least 2 characters!')
        } else {
            setFamnameError(null)
        }
    }

    const nationalityCheck = (value) => {
        if (value.length < 2) {
            setNationalityError('This field should be at least 2 characters!')
        } else {
            setNationalityError(null)
        }
    }

    const driverNumberCheck = (value) => {
        if (!NUMBER_PATTERN.test(value)) {
            setDriverNumberError('Driver number should be a positive number!')
        } else {
            setDriverNumberError(null)
        }
    }

    const birthCheck = (value) => {
        if (value.length < 10) {
            setBirthError('Date of birth should be at least 10 characters!')
        } else {
            setBirthError(null)
        }
    }

    const displayNameCheck = (value) => {
        if (value.length !== 3) {
            setDisplayNameError('Display name should be exact 3 characters!')
        } else {
            setDisplayNameError(null)
        }
    }

    const imageCheck = (value) => {
        if (!URL_PATTERN.test(value)) {
            setImageError('Image should be a real URL!')
        } else {
            setImageError(null)
        }
    }

    const descriptionCheck = (value) => {
        if (value.length < 30) {
            setDescriptionError('Description should be at least 30 characters!')
        } else {
            setDescriptionError(null)
        }
    }

   let isOwner = currentProfile._ownerId === user._id;
   
    if(isOwner) {
    return (
        <div className={styles.container}>
            <form className={styles.editForm} onSubmit={onSubmit}>
                <label htmlFor="fname">First Name</label>
                <input 
                onBlur={(e) => firstNameCheck(e.target.value)} 
                type="text" id="fname" name="firstname" 
                defaultValue={currentProfile.newData?.driverData?.firstname || currentProfile.driverData?.firstname}
                />
                {fnameError
                    ? <p className={styles.editErrors}>{fnameError}</p>
                    : ''
                }
                <label htmlFor="lname">Family Name</label>
                <input
                defaultValue={currentProfile.newData?.driverData?.familyname || currentProfile.driverData?.familyname}
                onBlur={(e) => familyNameCheck(e.target.value)}
                type="text"
                id="lname"
                name="familyname"
                />
                {famnameError
                    ? <p className={styles.editErrors}>{famnameError}</p>
                    : ''
                }
                 <label htmlFor="dnumber">Driver Number</label>
                <input 
                onBlur={(e) => driverNumberCheck(e.target.value)} 
                type="text" id="dnumber" name="driverNumber" 
                defaultValue={currentProfile.newData?.driverData?.driverNumber || currentProfile.driverData?.driverNumber}
                />
                {driverNumberError
                    ? <p className={styles.editErrors}>{driverNumberError}</p>
                    : ''
                }

                <label htmlFor="nationality">Nationality</label>
                <input 
                onBlur={(e) => nationalityCheck(e.target.value)} 
                type="text" id="nationality" name="nationality" 
                defaultValue={currentProfile.newData?.driverData?.nationality || currentProfile.driverData?.nationality}
                />
                {nationalityError
                    ? <p className={styles.editErrors}>{nationalityError}</p>
                    : ''
                }

                <label htmlFor="birthday">Date Of Birth</label>
                <input 
                onBlur={(e) => birthCheck(e.target.value)} 
                type="text" id="birthday" name="dateOfBirth" 
                defaultValue={currentProfile.newData?.driverData?.dateOfBirth || currentProfile.driverData?.dateOfBirth}
                />
                {birthError
                    ? <p className={styles.editErrors}>{birthError}</p>
                    : ''
                }

                <label htmlFor="dname">Display Name</label>
                <input 
                onBlur={(e) => displayNameCheck(e.target.value)} 
                type="text" id="dname" name="displayName" 
                defaultValue={currentProfile.newData?.driverData?.displayName || currentProfile.driverData?.displayName}
                />
                {displayNameError
                    ? <p className={styles.editErrors}>{displayNameError}</p>
                    : ''
                }

                <label htmlFor="imageUrl">Image</label>
                <input 
                onBlur={(e) => imageCheck(e.target.value)} 
                type="text" id="imageUrl" name="imageUrl" 
                defaultValue={currentProfile.newData?.driverData?.imageUrl || currentProfile.driverData?.imageUrl}
                />
                {imageError
                    ? <p className={styles.editErrors}>{imageError}</p>
                    : ''
                }

                <label htmlFor="subject">Description</label>
                <textarea
                defaultValue={currentProfile.newData?.driverData?.description || currentProfile.driverData?.description}
                onBlur={(e) => descriptionCheck(e.target.value)}
                id="description"
                name="description"
                placeholder="Write something.."
                style={{ height: 200 }}
                />
                {descriptionError
                    ? <p className={styles.editErrors}>{descriptionError}</p>
                    : ''
                }
                <button type="submit">Edit</button>
            </form>
        </div>
    );
    } else {
        <Navigate to='/' />
    }
}