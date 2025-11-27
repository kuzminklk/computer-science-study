
// Main server programm, use Express as foundation


import path from 'path';
import express from 'express';
import cors from 'cors';

import { logger } from './middleware/logEvent.js';
import errorHandler from './middleware/errorHandler.js';

import rootRouter from './routes/root.js';
import apiEmployeesRouter from './routes/api/employees.js';
import registerRouter from './routes/register.js';
import authRouter from './routes/auth.js';
import refreshRouter from './routes/refresh.js'

import corsOptions from './config/corsOptions.js';

import verifyJWT from './middleware/verifyJWT.js';

import cookieParser from 'cookie-parser';


const PORT = process.env.port || 3500;
const VIEWSPATH = path.join(import.meta.dirname, 'views');


const app = express();

app.use(logger)

app.use(cors(corsOptions));

// Middleware
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Routers. After 'verifyJWT' are protected — like an waterfall
app.use('/', rootRouter);
app.use('/register', registerRouter);
app.use('/auth', authRouter);
app.use('/refresh', refreshRouter);

app.use(verifyJWT)
app.use('/employees', apiEmployeesRouter);

// Not found page
app.all(/.*/, (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(VIEWSPATH, '404.html'));
    } else if (req.accepts('json')) {
        res.json({ error: '404 Not Found'});
    } else {
        res.type('text').send('404 Not Found');
    }
})

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) });
