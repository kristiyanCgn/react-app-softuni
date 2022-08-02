import styles from './Schedule.module.css'


export const ScheduleCard = ({circuit, clickHandler}) => {
    
        return (
            <li className={styles.otherSchedule}>
                <h3>{circuit.Circuit.Location.country} </h3>
                <p>Round: {circuit.round}</p>
                <p>{circuit.raceName}</p>
                <p>{circuit.date} </p>
                <button onClick={() => clickHandler({circuit})} className={styles.button}>More</button>
            </li>
        );
    
}