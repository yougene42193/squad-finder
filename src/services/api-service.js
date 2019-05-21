import TokenService from '../services/token-service'
import config from '../config';

const ApiService = {
    getUsers() {
        return fetch(`${config.API_ENDPOINT}/profiles`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
    },
    getUser(userId) {
        return fetch(`${config.API_ENDPOINT}/profiles/${userId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/profiles`, {
            method: 'POST',
            headers: {
                 'content-type': 'application/json',
            },
            body: JSON.stringify(user)
         })
             .then(res =>
                 (!res.ok)
                 ? res.json().then(e => Promise.reject(e))
                 : res.json()
             )
    },
   updateUser(userId) {
        return fetch(`${config.API_ENDPOINT}/profiles/${userId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userId)
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()    
            )
   },
   getFavorites() {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
        headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
    },  
    deleteFavorite(userId) {
        return fetch(`${config.API_ENDPOINT}/favorites/${userId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()    
            )
    }
}

export default ApiService