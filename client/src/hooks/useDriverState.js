import { useState, useEffect, useContext, useMemo } from 'react';
import { appContext } from '../Contexts/appContext';

import * as driverService from '../services/driverService';
const driverDescription = require('../driverDescription.json');

export const useDriverState = (driverId) => {
    const [driver, setDriver] = useState({});
    const { isLoading, setIsLoading } = useContext(appContext);

    useEffect(() => {
        setIsLoading(true);
        driverService.getOne(driverId)
            .then(driverResult => {
                setIsLoading(false);
                let finalResult = driverResult.MRData.DriverTable.Drivers[0]
                // console.log(finalResult);
                const neededDescription = driverDescription.find(x => x.driverId === finalResult.driverId)
                finalResult.description = neededDescription.description
                setDriver(finalResult);
            })
    }, [driverId]);

    return [
        driver,
        setDriver,
        isLoading
    ]
};
