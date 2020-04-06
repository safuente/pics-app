import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID phs72Z8cScpw4u9Zc4Edp7Eqc0Z9eMZ82-NEzGbchNI'
    }
});