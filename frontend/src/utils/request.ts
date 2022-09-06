import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:5555/api/',
});

export const get: (path: string, options?: any) => any = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
