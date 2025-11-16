
import path from 'path';
import express from 'express';
import cors from 'cors';
import { logger } from './middleware/logEvent.js';
import { errorHandler } from './middleware/errorHandler.js';
import subdirRouter from './routes/subdir.js';
import rootRouter from './routes/root.js';
import apiEmployeesRouter from './routes/api/employees.js';

const PORT = process.env.port || 3500;
const VIEWSPATH = path.join(import.meta.dirname, '..', 'views');

const app = express();

// Logger
app.use(logger)

// Cross Origin Resource Sharing – CORS
const whitelist = ['https://kuzminklk.dev', 'http://127.0.0.1:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) === -1 && origin /* Only for dev. version */) {
            callback(new Error('Not allowed by CORS'));
        } else {
            callback(null, true);
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// Middleware: JSON, URL-data, static
app.use(express.static(path.join(VIEWSPATH, 'static')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
app.use('/', rootRouter);
app.use('/subdir', subdirRouter);
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
