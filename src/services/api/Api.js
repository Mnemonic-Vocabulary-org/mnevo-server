import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://mnevo-grenudi.c9users.io:8080`,
    headers: {
      "Content-Type": "application/json"
    }
  })
}
