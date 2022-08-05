import * as request from './requester';

export const getCurrent = () => request.get('https://ergast.com/api/f1/current/driverStandings.json');

export const getCurrentConstructor = () => request.get('https://ergast.com/api/f1/current/constructorStandings.json')