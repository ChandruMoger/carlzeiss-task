import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com' 
export function getData (urlString){
  return axios(`${URL}/${urlString}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json', // whatever you want
    }
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};