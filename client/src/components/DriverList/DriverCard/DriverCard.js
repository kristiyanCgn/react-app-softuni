import { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { authContext } from '../../../Contexts/authContext';

import * as driverService from '../../../services/driverService';

import styles from './DriverCard.module.css';

export const DriverCard = ({driver}) => {
    let fullName = driver.givenName + ' ' + driver.familyName;
    const [error, setError] = useState(null)

    const { user } = useContext(authContext);

    const addToCollection = async (e, selectedDriver) => {
        const myTeam = await driverService.getMyTeam(user._id, user.accessToken) || [];
        const isAdded = myTeam.some(x => x.driver.driverId == selectedDriver.driverId)

        if(myTeam.length < 5 && !isAdded){
            driverService.addDriver(selectedDriver);

            e.target.className = styles.disabled
        } else {
            setError('You either have this driver as team member or you have reached the maximum capacity for your team!')
        }
    };
    
    return (
        <li className={styles.f1Driver}>
            <p className={styles["img-driver"]}><img src={driver.imageUrl} /></p>
            <h2>{fullName}</h2>
            <p>Nationality: {driver.nationality}</p>
            <p>Driver Number: #{driver.permanentNumber}</p>
            <Link className={styles.button} to={`/details/${driver.driverId}`}>Details</Link>
            {user.email
            ? <button onClick={(e) => addToCollection(e, driver)} className={styles.button}>Add to my collection</button>
            : ''
            }
            {error &&
                <span>{error}</span>
            }
        </li>
    );
}