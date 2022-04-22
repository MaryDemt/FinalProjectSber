import axios from 'axios';

const personToken = 'personToken'
let API_TOKEN = localStorage.getItem(personToken)
export const axiosInstance = axios.create({
  baseURL: 'https://api.react-learning.ru/',
  headers: { authorization: `Bearer ${API_TOKEN}`}
});

axiosInstance.interceptors.response.use(
  (response) => {
    //console.log(response)
    if(response.request.responseURL === 'https://api.react-learning.ru/signin'){
      //console.log({axiosInstance})
      axiosInstance.defaults.headers.authorization = `Bearer ${response.data.token}`
  }
  return response
  },
)


