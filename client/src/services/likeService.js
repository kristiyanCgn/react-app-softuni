import * as request from './requester';

const baseUrl = 'https://localhost:3030/data/likes';

export const like = (profileId) => request.post(baseUrl, { profileId })

export const getProfileLikes = (profileId) => {
    let query = encodeURIComponent(`profileId="${profileId}"`);

    let querystring = `where=${query}`;

    return request.get(`${baseUrl}?${querystring}`);
}