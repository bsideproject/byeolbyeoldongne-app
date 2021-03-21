import axios from 'axios';

const api = axios.create({
    baseURL:
        'http://bbdnserver-env.eba-a4c5kpmb.ap-northeast-2.elasticbeanstalk.com',
    timeout: 5000,
    withCredentials: true,
});

export default api;
