import axios from 'axios';

function createUser(name, email, message) {
    return axios.post(`/`,
        {
            name: name,
            email: email,
            message: message,
        }, {
        headers: {
            'Content-Type': 'application/json'
        }
    },
    ).catch((error) => {
        console.log(error)
    })
}

export default createUser;