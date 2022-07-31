import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from '../Spinner/Spinner';
import { useDriverState } from '../../hooks/useDriverState';
import './Details.css'
import { appContext } from '../../Contexts/appContext';


export const Details = () => {

    const { drivers } = useContext(appContext);
    const { driverId } = useParams();
    const [driver, setDriver, isLoading] = useDriverState(driverId);

    let neededDriver = drivers.find(x => x.driverId == driverId);
    driver.imageUrl = neededDriver.imageUrl

    if(isLoading) {
        return (
            <Spinner />
        );
    } else {
        return (
            <>
                <section id="details-page" className="details">
                    <div className="driver-information">
                        <p className="img img-details"><img src={driver.imageUrl} alt='driver image' /></p>
                        <h4>First Name: {driver.givenName}</h4>
                        <h4>Family Name: {driver.familyName}</h4>
                        <p className="type">Driver Number: #{driver.permanentNumber}</p>
                        <p className="type">Nationality: {driver.nationality}</p>
                        <p className="type">Date Of Birth: {driver.dateOfBirth}</p>
                        <p className="type">Display Name: {driver.code}</p>
                        {/* <div className="likes">
                                <img className="hearts" src="/images/heart.png" />
                                <span id="total-likes">Likes: {driver.likes?.length || 0}</span>
                            </div> */}
                    </div>
                    <div className="driver-description">
                        <h3>Biography:</h3>
                            <p>{driver.description}</p>
                            <a target="_blank" rel="noopener noreferrer" href={driver.url}>See More</a>
                    </div>
                </section>
            </>
        );
    }
    }



    