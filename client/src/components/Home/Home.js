import { useState, useEffect, useContext } from "react";
import { appContext } from "../../Contexts/appContext";
import { Spinner } from "../Spinner/Spinner";
import { HomeCard } from "./HomeCard/HomeCard";

export const Home = () => {
    const [nextRace, setNextRace] = useState([]);
    const [lastRace, setLastRace] = useState([]);
    const { isLoading, setIsLoading } = useContext(appContext);


    useEffect(() => {
        setIsLoading(true);
        fetch('https://ergast.com/api/f1/current/next.json')
            .then(res => res.json())
            .then(result => {
                setNextRace(result.MRData.RaceTable.Races[0]);
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        setIsLoading(true);
        fetch('https://ergast.com/api/f1/current/last.json')
            .then(res => res.json())
            .then(result => {
                setLastRace(result.MRData.RaceTable.Races[0]);
                setIsLoading(false)
            })
    }, [])


    if(isLoading) {
        return <Spinner />

    } else {
        return (
            <>
                <h2>F1 Fan Page</h2>
                <HomeCard nextRace={ nextRace } lastRace={ lastRace }/>
            </>
    );
}
}