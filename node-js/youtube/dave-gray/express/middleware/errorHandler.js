
// Log errors in error log


import { logEvent } from './logEvent.js'

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    logEvent(`${err.name}: ${err.message}\n`, 'errLog.txt');
    res.status(500).send(err.message);
}

export default errorHandler