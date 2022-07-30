import { useEffect, useState } from "react";
import { ScheduleCard } from "./ScheduleCard";

import './Schedule.css'
import { ScheduleDetails } from "./ScheduleDetails";

export const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [clickedCircuit, setClickedCircuit] = useState(null);

    const clickHandler = ({circuit}) => {
        setClickedCircuit(circuit);
    }

    const backClick = () => {
        setClickedCircuit(null)
    }

    useEffect(() => {
        fetch('http://ergast.com/api/f1/current.json')
            .then(res => res.json())
            .then(result =>{
                setSchedule(result.MRData.RaceTable.Races);
            })
    }, []);

    if(clickedCircuit) {
        return (
            <ScheduleDetails circuit={clickedCircuit} backClick={backClick} />
        );
    } else {
        return (
            <section id="schedule-page" className="schedule">
                <ul className="other-schedule-list">
                    {schedule.map(x => <ScheduleCard key={x.raceName} circuit={x} clickHandler={clickHandler} />)}
                </ul>
            </section>
        );
    }
}

