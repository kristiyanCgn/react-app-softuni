import { useState, useEffect, useContext } from "react"; 
import styles from './Standings.module.css'


import * as standingsService from '../../services/standingsService';
import { StandingsList } from "./StandingsList";
import { Spinner } from "../Spinner/Spinner";
import { appContext } from "../../Contexts/appContext";

export const Standings = () => {
    const [standings, setStandings] = useState([]);
    const { isLoading, setIsLoading } = useContext(appContext);

    useEffect(() => {
        setIsLoading(true);
        standingsService.getCurrent()
            .then(result => {
                setIsLoading(false)
                let finalResult = result.MRData.StandingsTable.StandingsLists[0].DriverStandings
                setStandings(finalResult)
            })
    }, [])

    if(isLoading) {
        return (
            <Spinner />
        );
    } else {
        return (
            <section id={styles["dashboard-page"]} className={styles.dashboard}>
                <h1>Standings</h1>
                    <p>Standings get updated afetr every race week.</p>
                <table id={styles.customers}>
                <thead>
                    <tr>
                        <th>POS</th>
                        <th>Driver</th>
                        <th>Nationality</th>
                        <th>Car</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map(x => <StandingsList key={x.Driver.permanentNumber} data={x} />)}
                </tbody>
            </table>
            </section>
        );
    }
}