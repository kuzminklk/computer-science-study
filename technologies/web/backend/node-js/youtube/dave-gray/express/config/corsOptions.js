
// Config CORS

import allowedOrigins from './allowedOrigins.js'

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) === -1 && origin /* Only for dev. version */) {
            callback(new Error('Not allowed by CORS'));
        } else {
            callback(null, true);
        }
    },
    optionsSuccessStatus: 200
}

export default corsOptions