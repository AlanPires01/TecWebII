const http = require('http');
http.createServer((request, response)=>{
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    response.write('Bem-vindo ao meu servidor');
    response.end();
}).listen(1020);g