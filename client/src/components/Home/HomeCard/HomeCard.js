import styles from '../HomeCard/HomeCard.module.css';

export const HomeCard = ( { nextRace, lastRace }) => {

    return (
        <>
            <div className={styles.nextRace}>
                <h2>Next Race</h2>
                <h4>{nextRace.raceName}</h4>
                <h4>Round: {nextRace.round}</h4>
                <h4>Date: {nextRace.date}</h4>
                <h4>Time: {nextRace.time}</h4>
                <p>
                <a target="_blank" rel="noopener noreferrer" href={nextRace.url}>See More</a>
                </p>
                
            </div>
                <span>
                    <p></p>
                </span>
            <div className={styles.nextRace}>
                <h2>Last Race</h2>
                <h4>{lastRace.raceName}</h4>
                <h4>Round: {lastRace.round}</h4>
                <h4>Date: {lastRace.date}</h4>
                <h4>Time: {lastRace.time}</h4>
                <p>
                <a target="_blank" rel="noopener noreferrer" href={lastRace.url}>See More</a>
                </p>
            </div>
        </>
    );
}