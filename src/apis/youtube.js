import axios from 'axios';

const KEY = 'AIzaSyCM2rLII7zs95q2S9ocbQy8c5YV-RG12uA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});