/* eslint-disable no-unused-vars */
import _ from 'lodash';
import config from '../../config'
export const userService = {
    login,
    logout
}
let token
async function login(email, password,role) {
    let url = null
    switch (role) {
        case "tutor":
            url = "/teacher/login"
            break;
            case "user":
            url ="/student/login"
                break;
        default:
            url=null
            break;
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    };
    const response = await fetch(`${config.api.URL}${url}`, requestOptions)
    const tokens = await handleResponse(response)
    token = tokens
    return tokens;
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('pyrevsysreftock');
}

function handleResponse(response) {
    console.log(response)
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}