import * as request from './requester';

export const getCurrent = () => request.get('http://ergast.com/api/f1/current/driverStandings.json');