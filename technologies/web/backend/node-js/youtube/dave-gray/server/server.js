import { logEvent } from './logEvent.js'
import EventEmitter from 'events';
import http from 'http';
import fs from 'fs';
import path from 'path';

class Emitter extends EventEmitter { };
const myEmitter = new Emitter();

myEmitter.on('log', (msg, fileName) => logEvent(msg, fileName));

const PORT = process.env.port || 3500;

async function serveFile(filePath, contentType, response) {
    try {
        const rawData = await fs.promises.readFile(
            filePath, 
            contentType.includes('image') ? '' : 'utf8'
        );
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200, 
            { 'Content-Type': contentType });
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
    } catch (err) {
        console.error(err);
        myEmitter.emit('log', `${err.name}\t${err.message}`, 'errLog.txt')
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req, res) => {

    console.log(req.url, req.method);
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt')

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg' || '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    const viewsPath = path.join(import.meta.dirname, 'views')

    let filePath =
        contentType === 'text/html' && req.url === '/'
            ? path.join(viewsPath, 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(viewsPath, req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(viewsPath, req.url)
                    : path.join(import.meta.dirname, req.url);

    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    if (fs.existsSync(filePath)) {
        serveFile(filePath, contentType, res)
    }

    else {
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'location': '/' });
                res.end();
                break;
            default:
                serveFile(path.join(viewsPath, '404.html'), 'text/html', res);
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
