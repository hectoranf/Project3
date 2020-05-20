import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/meeting`,
            withCredentials: true
        })
    }

    getAllMeetings = () => this.service.get('/getAll')
    getByTitle = title => this.service.get(`/media?title=${title}`)
    getById = id => this.service.get(`/${id}`)

    createMeeting = meeting => this.service.post(`/create`, { meeting })

    joinMeeting = id => this.service.post(`/${id}/join`)
}