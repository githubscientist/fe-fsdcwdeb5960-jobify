import axios from "axios";

const baseURL = 'https://be-fsdcwdeb5960-jobify.onrender.com/api/v1';

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;