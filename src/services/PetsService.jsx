import axios from 'axios';

export function getPets() {
    
    return axios
        .get("http://agl-developer-test.azurewebsites.net/people.json")
        .then(results => results.data)
        .catch((ex) => {
            const error = axios.isCancel(ex)
            ? 'Request Cancelled'
            : ex.code === 'ECONNABORTED'
            ? 'A timeout has occurred'
            : ex.response.status === 404
            ? 'Resource Not Found'
            : 'An unexpected error has occurred';
            console.log(error);
        });
  }