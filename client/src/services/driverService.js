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

export const getMyTeam = async (ownerId, accessToken) => {
    try{
    const res = await fetch(`http://localhost:3030/data/myTeam?where=_ownerId%3D%22${ownerId}%22`, {
        headers: {
            'X-Authorization': accessToken,
        }
    });
    const result = await res.json()
    
    return result;

    } catch (error) {
        console.log(error);
    }
}

export const removeDriver = (recordId) => request.del(`http://localhost:3030/data/myTeam/${recordId}`);




