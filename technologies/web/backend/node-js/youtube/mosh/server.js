import http from 'http'

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('Hello, world!');
        res.end();
    }
    else if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

server.listen(3000);