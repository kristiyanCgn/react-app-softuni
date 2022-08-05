import * as request from './requester';

export const getAll = () => request.get('https://ergast.com/api/f1/current/drivers.json');

export const getOne = (driverId) => request.get(`https://ergast.com/api/f1/drivers/${driverId}.json`)

export const addDriver = (driver) => request.post('https://localhost:3030/data/myTeam', { driver })

export const getMyTeam = async (ownerId, accessToken) => {
    try{
    const res = await fetch(`https://localhost:3030/data/myTeam?where=_ownerId%3D%22${ownerId}%22`, {
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

export const removeDriver = (recordId) => request.del(`https://localhost:3030/data/myTeam/${recordId}`);




