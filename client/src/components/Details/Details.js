import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from '../Spinner/Spinner';
import { useDriverState } from '../../hooks/useDriverState';
import styles from './Details.module.css';
import { appContext } from '../../Contexts/appContext';


export const Details = () => {

    const { drivers } = useContext(appContext);
    const { driverId } = useParams();
    const [driver, setDriver, isLoading] = useDriverState(driverId);

    let neededDriver = drivers.find(x => x.driverId == driverId);
    if(neededDriver) {
        driver.imageUrl = neededDriver.imageUrl
    } else {
        driver.imageUrl = null;
    }

    if(isLoading) {
        return (
            <Spinner />
        );
    } else {
        return (
            <>
                <section id={styles["details-page"]} className={styles.details}>
                    <div className="driver-information">
                        <p className={styles["img-details"]}><img src={driver.imageUrl} alt='driver image' /></p>
                        <h4>First Name: {driver.givenName}</h4>
                        <h4>Family Name: {driver.familyName}</h4>
                        <p className={styles.type}>Driver Number: #{driver.permanentNumber}</p>
                        <p className={styles.type}>Nationality: {driver.nationality}</p>
                        <p className={styles.type}>Date Of Birth: {driver.dateOfBirth}</p>
                        <p className={styles.type}>Display Name: {driver.code}</p>
                        {/* <div className="likes">
                                <img className="hearts" src="/images/heart.png" />
                                <span id="total-likes">Likes: {driver.likes?.length || 0}</span>
                            </div> */}
                    </div>
                    <div className={styles["driver-description"]}>
                        <h3>Biography:</h3>
                            <p>{driver.description}</p>
                            <a target="_blank" rel="noopener noreferrer" href={driver.url}>See More</a>
                    </div>
                </section>
            </>
        );
    }
    }



    