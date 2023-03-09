const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/ok' && req.method === 'GET'){
        res.writeHead(200)
        res.end("Server Running")
    }else if(req.url === '/greet' && req.method === 'GET'){
        res.writeHead(200).end('Hello')
    }else if(req.url === '/internal-error'){
        res.writeHead(500).end('Internal Server Error')
    }else{
        res.writeHead(404).end(
            `Cannot ${req.method} ${req.url}`
        )
    }
})
server.listen(3210, () => {
    console.log('Server listening on port 3210')
})