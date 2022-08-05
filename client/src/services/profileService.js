import * as request from './requester';

export const createDriver = (driverData) => request.post(`https://localhost:3030/data/userDrivers`, { driverData });

export const getAll = () => request.get('https://localhost:3030/data/userDrivers');

export const removeDriver = (driverId) => request.del(`https://localhost:3030/data/userDrivers/${driverId}`)

export const getOne = (driverId) => request.get(`https://localhost:3030/data/userDrivers/${driverId}`);

export const update = (driverId, newData) => request.put(`https://localhost:3030/data/userDrivers/${driverId}`, { newData });