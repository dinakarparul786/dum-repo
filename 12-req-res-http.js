const http = require('http')

const server = http.createServer((req,res) => {
   if(req.url === '/'){

    res.end('welcome to the home page')
   }
   if(req.url === '/about'){

    res.end('Tell me about yourself')
   }
   res.end(`
    <h1>Oops!</h1>
    <p>The page you are looking was not found</p>
    <a href="/"> Back Home</a>`) 
})
server.listen(5000)