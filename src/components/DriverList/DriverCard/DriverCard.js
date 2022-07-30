import { useContext } from 'react';
import { Link} from 'react-router-dom';
import { appContext } from '../../../Contexts/appContext';
import { authContext } from '../../../Contexts/authContext';

import * as driverService from '../../../services/driverService';

import './DriverCard.css'

export const DriverCard = ({driver}) => {
    let fullName = driver.givenName + ' ' + driver.familyName;

    const { myDrivers, setMyDrivers } = useContext(appContext);
    const { user } = useContext(authContext);

    const addToCollection = async (e, selectedDriver) => {
        const myTeam = await driverService.getMyTeam(user._id);
        
        const isAdded = myTeam.some(x => x.driver.driverId == selectedDriver.driverId)

        if(myTeam.length < 5 && !isAdded){
            driverService.addDriver(selectedDriver);

            setMyDrivers(state => [
                ...state,
                selectedDriver
            ]);
            e.target.className = 'disabled'
        }
    };
    
    return (
        <li className="otherPet">
            <p className="img img-driver"><img src={driver.imageUrl} /></p>
            <h2>{fullName}</h2>
            <p>Nationality: {driver.nationality}</p>
            <p>Driver Number: #{driver.permanentNumber}</p>
            <Link className="button" to={`/details/${driver.driverId}`}>Details</Link>
            {user.email
            ? <button onClick={(e) => addToCollection(e, driver)} className="button">Add to my collection</button>
            : ''
            }
        </li>
    );
}