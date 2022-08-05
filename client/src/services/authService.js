import * as request from './requester';

const baseUrl = 'https://localhost:3030/users';

export const login = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password });
    

export const register = (email, password) => 
request.post(`${baseUrl}/register`, { email, password });


export const logout = async (accessToken) => {
    try {
        await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken,
            }
        })
    } catch (error) {
        console.log(error);
    }
}

    