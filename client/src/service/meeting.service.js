import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/meeting',
            withCredentials: true
        })
    }

    getAllMeetings = () => this.service.get('/getAll')
    getByTitle = title => this.service.get(`/media?title=${title}`)
}