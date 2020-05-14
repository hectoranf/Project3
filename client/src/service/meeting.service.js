import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    getAllMeetings = () => this.service.get('/meeting/getAll')
    getByTitle = title => this.service.get(`/meeting/media?title=${title}`)
}