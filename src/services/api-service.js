import TokenService from '../services/token-service'
import config from '../config';

const ApiService = {
    /* Get player list */
    getUsers() {
        return fetch(`${config.API_ENDPOINT}/profiles`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
    },
    /* get user */
    getUser(userId) {
        return fetch(`${config.API_ENDPOINT}/profiles/${userId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    /*  Get user favorites list */
   
}

export default ApiService