import * as request from './requester';

export const createDriver = (driverData) => request.post(`http://localhost:3030/data/userDrivers`, { driverData });

export const getAll = () => request.get('http://localhost:3030/data/userDrivers');

export const removeDriver = (driverId) => request.del(`http://localhost:3030/data/userDrivers/${driverId}`)