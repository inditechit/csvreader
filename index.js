const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(cors({
    origin: [
        'http://localhost:8080'
    ],
    credentials: true
}));
const myRouter = require('./routes/route'); // Import your routes

app.use('/api', myRouter);

const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
