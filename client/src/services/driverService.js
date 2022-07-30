import * as request from './requester';

export const getAll = () => request.get('https://ergast.com/api/f1/current/drivers.json');

export const getOne = (driverId) => request.get(`http://ergast.com/api/f1/drivers/${driverId}.json`)


// useEffect(() => {
//     fetch('https://ergast.com/api/f1/current/drivers.json')
//         .then(res => res.json())
//         .then(result => {
//             let allDrivers = result.MRData.DriverTable.Drivers
//             setDrivers(allDrivers)
//         });
// }, [])

export const addDriver = (driver) => request.post('http://localhost:3030/data/myTeam', { driver })

export const getMyTeam = (ownerId) => request.get(`http://localhost:3030/data/myTeam?where=_ownerId%3D%22${ownerId}%22`);

