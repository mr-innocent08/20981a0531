
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchData = async () => {
    try {
        const response = await API.get('/train/train');
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error; 
    }
};
