import {format} from 'date-fns';
import {v4 as uuid} from 'uuid';
import fs from 'fs';
import path from 'path';

async function logEvent(message) {
    const dateTime = format(new Date(), 'yyyy.MM.dd\tHH:mm:ss');
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    const logDirPath = path.join(import.meta.dirname,'logs');
    try {
        if (!fs.existsSync(logDirPath)) {
            await fs.promises.mkdir(logDirPath)
        }
        await fs.promises.appendFile(path.join(logDirPath,'event-log.txt'), logItem);
    } catch (err) {
        console.error(err);
    }
}

export {logEvent};