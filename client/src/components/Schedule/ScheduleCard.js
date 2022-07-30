
export const ScheduleCard = ({circuit, clickHandler}) => {
    
        return (
            <li className="otherSchedule">
                <h3>{circuit.Circuit.Location.country} </h3>
                <p>Round: {circuit.round}</p>
                <p>{circuit.raceName}</p>
                <p>{circuit.date} </p>
                <button onClick={() => clickHandler({circuit})} className="button">More</button>
            </li>
        );
    
}