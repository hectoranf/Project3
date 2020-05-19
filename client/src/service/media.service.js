import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/media`,
            withCredentials: true
        })
    }
    getAll = title => this.service.get(`/getAll?title=${title}`)

}