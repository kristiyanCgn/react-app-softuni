import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../../Contexts/appContext';

import { profileContext } from '../../Contexts/profileContext';
import * as profileService from '../../services/profileService';
import './CreateDriver.css';

export const CreateDriver = () => {
    // const { errors, addError } = useContext(appContext);
    const { addUserDriver } = useContext(profileContext);
    const navigate = useNavigate();

    const [fnameError, setFnameError] = useState(null)
    const [famnameError, setFamnameError] = useState(null)
    const [nationalityError, setNationalityError] = useState(null)
    const [driverNumberError, setDriverNumberError] = useState(null)
    const [birthError, setBirthError] = useState(null)
    const [displayNameError, setDisplayNameError] = useState(null)
    const [imageError, setImageError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)

    const URL_PATTERN = /^https?:\/\/(.+)/;
    const NUMBER_PATTERN = /^[0-9]+$/;

    const onSubmit = async (e) => {
        e.preventDefault();

        const driverData = Object.fromEntries(new FormData(e.target));

        if(fnameError || famnameError || nationalityError || driverNumberError || birthError || displayNameError || imageError || descriptionError) {
            return;
        }

        await profileService.createDriver(driverData);
        const newestList = await profileService.getAll();
        addUserDriver(newestList);

        navigate('/')
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


    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <label htmlFor="fname">First Name</label>
                <input onBlur={(e) => firstNameCheck(e.target.value)} type="text" id="fname" name="firstname" placeholder="Your name.." />
                {fnameError
                    ? <span className='errors'>{fnameError}</span>
                    : ''
                }
                <label htmlFor="lname">Family Name</label>
                <input
                onBlur={(e) => familyNameCheck(e.target.value)}
                type="text"
                id="lname"
                name="familyname"
                placeholder="Your family name.."
                />
                 {famnameError
                    ? <span className='errors'>{famnameError}</span>
                    : ''
                }
                 <label htmlFor="dnumber">Driver Number</label>
                <input onBlur={(e) => driverNumberCheck(e.target.value)} type="text" id="dnumber" name="driverNumber" placeholder='#'/>
                {driverNumberError
                    ? <span className='errors'>{driverNumberError}</span>
                    : ''
                }

                <label htmlFor="nationality">Nationality</label>
                <input onBlur={(e) => nationalityCheck(e.target.value)} type="text" id="nationality" name="nationality" placeholder='Thai'/>
                {nationalityError
                    ? <span className='errors'>{nationalityError}</span>
                    : ''
                }

                <label htmlFor="birthday">Date Of Birth</label>
                <input onBlur={(e) => birthCheck(e.target.value)} type="text" id="birthday" name="dateOfBirth" placeholder='01-01-2000'/>
                {birthError
                    ? <span className='errors'>{birthError}</span>
                    : ''
                }

                <label htmlFor="dname">Display Name</label>
                <input onBlur={(e) => displayNameCheck(e.target.value)} type="text" id="dname" name="displayName" placeholder='ALO'/>
                {displayNameError
                    ? <span className='errors'>{displayNameError}</span>
                    : ''
                }

                <label htmlFor="imageUrl">Image</label>
                <input onBlur={(e) => imageCheck(e.target.value)} type="text" id="imageUrl" name="imageUrl"/>
                {imageError
                    ? <span className='errors'>{imageError}</span>
                    : ''
                }

                <label htmlFor="subject">Description</label>
                <textarea
                onBlur={(e) => descriptionCheck(e.target.value)}
                id="description"
                name="description"
                placeholder="Write something.."
                style={{ height: 200 }}
                defaultValue={""}
                />
                {descriptionError
                    ? <span className='errors'>{descriptionError}</span>
                    : ''
                }
                <button type="submit">Create</button>
            </form>
        </div>
    );
}