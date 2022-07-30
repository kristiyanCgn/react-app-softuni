export const request = async (method, url, data) => {
    let result = null;
    const user = getToken();

    let headers = {}

    if (user) {
        headers['X-Authorization'] = user;
    }

    if (method == 'GET') {
        result = fetch(url, { headers });
    } else {
        result = fetch(url, {
            method,
            headers: {
                ...headers,
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }
    
    return result.then(responseHandler);
};

async function responseHandler(res) {
    let jsonData = await res.json();

    if (res.ok) {
        return jsonData;
    } else {
        throw jsonData;
    }
};

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw {message: 'You must be authenticated'};
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch(err) {
        console.log(err);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');