const http= require('http')

const server= http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end ('hello world')
    }
    
})

server.listen(5000, ()=>{
    console.log('Misha is running a server http://localhost:5000/')
})