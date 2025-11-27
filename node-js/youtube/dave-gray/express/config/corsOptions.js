
// Config for CORS


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

export default corsOptions