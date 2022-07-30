import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { profileContext } from '../../Contexts/profileContext';
import * as profileService from '../../services/profileService';
import './CreateDriver.css';

export const CreateDriver = () => {
    const { addUserDriver } = useContext(profileContext);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        const driverData = Object.fromEntries(new FormData(e.target));
        console.log(driverData);
        await profileService.createDriver(driverData);
        addUserDriver(driverData);

        navigate('/')
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label htmlFor="lname">Family Name</label>
                <input
                type="text"
                id="lname"
                name="familyname"
                placeholder="Your family name.."
                />
                 <label htmlFor="dnumber">Driver Number</label>
                <input type="text" id="dnumber" name="driverNumber" placeholder='#'/>

                <label htmlFor="nationality">Nationality</label>
                <input type="text" id="nationality" name="nationality" placeholder='Thai'/>

                <label htmlFor="birthday">Date Of Birth</label>
                <input type="text" id="birthday" name="dateOfBirth" placeholder='01-01-2000'/>

                <label htmlFor="dname">Display Name</label>
                <input type="text" id="dname" name="displayName" placeholder='ALO'/>

                <label htmlFor="imageUrl">Image</label>
                <input type="text" id="imageUrl" name="imageUrl"/>

                <label htmlFor="subject">Description</label>
                <textarea
                id="description"
                name="description"
                placeholder="Write something.."
                style={{ height: 200 }}
                defaultValue={""}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}