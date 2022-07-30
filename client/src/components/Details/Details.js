import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as driverService from '../../services/driverService';
import { Button } from 'react-bootstrap';
import { Spinner } from '../Spinner/Spinner';
import { useDriverState } from '../../hooks/useDriverState';
import './Details.css'
import { appContext } from '../../Contexts/appContext';


export const Details = () => {

    const { drivers } = useContext(appContext);
    const navigate = useNavigate();
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
                {/* <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} /> */}
                <section id="details-page" className="details">
                    <div className="pet-information">
                        <p className="img img-details"><img src={driver.imageUrl} /></p>
                        <h4>First Name: {driver.givenName}</h4>
                        <h4>Family Name: {driver.familyName}</h4>
                        <p className="type">Driver Number: #{driver.permanentNumber}</p>
                        <p className="type">Nationality: {driver.nationality}</p>
                        <p className="type">Date Of Birth: {driver.dateOfBirth}</p>
                        <p className="type">Display Name: {driver.code}</p>
                        {/* <p className="img"><img src={driver[0].imageUrl} /></p> */}
                        {/* <div className="actions">
                            {user._id && (user._id == driver._ownerId
                                ? ownerButtons
                                : userButtons
                            )}
    
                            <div className="likes">
                                <img className="hearts" src="/images/heart.png" />
                                <span id="total-likes">Likes: {driver.likes?.length || 0}</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="pet-description">
                        <h3>Biography:</h3>
                            <p>{driver.description}</p>
                            <a target="_blank" rel="noopener noreferrer" href={driver.url}>See More</a>
                    </div>
                </section>
            </>
        );
    }
    }



    