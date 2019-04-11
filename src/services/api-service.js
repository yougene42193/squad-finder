import config from '../config';

const ApiService = {
    getUsers() {
        return fetch(`${config.API_ENDPOINT}/users`, {
            headers: {
                
            },
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
    }
}