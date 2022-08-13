const url = 'http://localhost:3000/';

export const ApiService = {
    get(endpoint) {
        return fetch(`${url}${endpoint}`).then((response) => response.json());
    },
    async post(endpoint, data) {
        console.log(data)
        console.log(url + endpoint)
        return (
        await fetch(`${url}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then((response) => response.json()).then((response) =>{
                console.log(response)
        }))
    },
    delete(endpoint, id) {
        return fetch(`${url}${endpoint}/${id}`, {
            method: 'DELETE',
        }).then((response) => response.json());
    }
}