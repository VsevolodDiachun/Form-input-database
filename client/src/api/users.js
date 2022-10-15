import axios from 'axios';
import config from '../config.json'
function createUser(name, email, message) {
    console.log(config.baseUrl)
    return axios.post(`${config.baseUrl}/message/`,
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