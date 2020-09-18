import axios from "axios"

const productsApi = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
})

export default productsApi