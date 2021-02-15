import axios from 'axios';

const api = axios.create({
    baseURL:
        'http://bbdnserver-env.eba-a4c5kpmb.ap-northeast-2.elasticbeanstalk.com',
    timeout: 1000,
});

export default api;