import * as request from './requester';

export const getAll = () => request.get('http://ergast.com/api/f1/current/constructors.json');
