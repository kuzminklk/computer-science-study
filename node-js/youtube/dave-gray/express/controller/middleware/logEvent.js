import {format} from 'date-fns';
import {v4 as uuid} from 'uuid';
import fs from 'fs';
import path from 'path';

async function logEvent(message, logName) {
    const dateTime = format(new Date(), 'yyyy.MM.dd\tHH:mm:ss');
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    const logDirPath = path.join(import.meta.dirname, '..', '..', 'test', 'logs');

    try {
        if (!fs.existsSync(logDirPath)) {
            await fs.promises.mkdir(logDirPath)
        }
        await fs.promises.appendFile(path.join(logDirPath, logName), logItem);
    } catch (err) {
        console.error(err);
    }
}

function logger(req, res, next) {
    logEvent(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method}\t${req.path}`);
    next();
}

export { logger, logEvent };