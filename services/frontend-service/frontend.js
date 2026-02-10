const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Example endpoints calling backend services
app.get('/', (req, res) => {
    res.send('Welcome to the Frontend Service!');
});

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('http://users-service:3001/users');
        res.json(response.data);
    } catch (err) {
        res.status(500).send('Error fetching users');
    }
});

app.get('/orders', async (req, res) => {
    try {
        const response = await axios.get('http://orders-service:3002/orders');
        res.json(response.data);
    } catch (err) {
        res.status(500).send('Error fetching orders');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Frontend Service running on port ${PORT}`));

