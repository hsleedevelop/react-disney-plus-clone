import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '03c2ba90603897e46afbaff648e6fd60',
        language: 'ko-KR',
    }
})

export default instance;