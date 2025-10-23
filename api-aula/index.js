/* express import */
import express from 'express';
/* cors import */
import cors from 'cors';
/* dotenv import */
import dotenv from 'dotenv';

/* dotenv config */
dotenv.config();

/* app instance */
const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());

/* base import */
import base from './base.js';

/* routes */
app.get('/', (req, res) => {
    res.send('Hello, World!');
    res.status(200);
});

app.get('/msg', (req, res) => {
    const msg = { message: 'json message explample' }
    res.send(msg);
});

/* server listening */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});