const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to FlyRank JavaScript 101');
});

app.get('/api/message', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from Express API'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});