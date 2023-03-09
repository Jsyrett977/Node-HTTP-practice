const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.write('Server Running')
    res.end()
})
server.listen(3210, () => {
    console.log('Server is listening on port 3210')
})