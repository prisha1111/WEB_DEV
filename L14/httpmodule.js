//http-> req,res handle krne ke liye
//http->communication
const http = require('node:http');

// const server = http.createServer((req, res) => {
//   res.end();
// });
// server.on('clientError', (err, socket) => {
//   socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });
// server.listen(8000);

const blogpost={
    "blogTitle":"Title",
    "description":"this is blog"
}
const server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end("data fetched");
    if(req.method=="GET" && req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("data fetched");
    }
    else if(req.method=="GET" && req.url=='/blog'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end(JSON.stringify(blogpost));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("not found");
    }

})
server.listen(8000,()=>{
    console.log("server running on 8000 port");
})