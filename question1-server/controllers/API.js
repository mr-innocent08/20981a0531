import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const data = {
    "companyName": "REC",
    "clientId": process.env.CLIENT_ID,
    "ownerName": "ChandraSekhar",
    "ownerEmail": "sekharmoturu08@gmail.com",
    "rollNo": "20981a0531",
    "clientSecret": process.env.CLIENT_SECRET
};

const getData = async (token) => {
    const getTrainDataRequest = {
        method: 'get',
        url: 'http://20.244.56.144/train/trains',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };

    const response = await axios(getTrainDataRequest);
    return response.data;
};

const getAPI = async (req, res) => {
    try {
        const authRequest = {
            method: 'post',
            url: 'http://20.244.56.144/train/auth',
            data: data,
        };
        
        const authResponse = await axios(authRequest);
        const accessToken = authResponse.data.access_token;

        const trainData = await getData(accessToken);

        res.json(trainData);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: 'An error occurred' });
    }
};

export { getAPI };
