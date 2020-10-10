import axios from 'axios';

const KEY= 'AIzaSyDRYaZOreqDY_Fr5PyhbB3Li3VybgwELLE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});