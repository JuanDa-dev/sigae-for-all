import axios from 'axios'

const url = `${process.env.REACT_APP_URL}/api/`;
const getConfig = (token) => {
    const value = token ? process.env.REACT_APP_SPACE === 'null' : process.env.REACT_APP_SPACE + token
    return {
        headers: {
            Authorization: value,
        },
        withCredentials: true
    }
}

export const getRequest = async ({ token, name }) => {
    return await axios.get(url + name, getConfig(token))
        .then(resp => resp.data)
        .catch(err => err.response.data.message);
}

export const postRequest = async ({ payload, token, name}) => {
    return await axios.post(url + name, payload, getConfig(token))
        .then(resp => resp.data)
        .catch(err => err.response.data.message);
}

export const deleteRequest = async ({ token, name }) => {
    return await axios.delete(url + name, getConfig(token))
        .then(resp => resp.data)
        .catch(err => err.response.data.message);
}

export const putRequest = async ({ payload, token, name }) => {
    return await axios.put(url + name, payload, getConfig(token))
        .then(resp => resp.data)
        .catch(err => err.response.data.message);
}
