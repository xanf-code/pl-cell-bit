const axios = require("axios");

export const client = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});