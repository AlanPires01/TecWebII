const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((request, response)=>{
    if(request.url =='/'||request.url=='/index.html'){
        fs.readFile('index.html',(err,arquivo)=>{
            response.writeHead(200,{'Content-Type':'text/html'})
            response.write(arquivo)
            return response.end()
        })
    }else if (request.url=='/style.css'){
        fs.readFile('style.css',(err,arquivo)=>{
            response.writeHead(200,{'Content-Type':'text/css'});
            response.write(arquivo);
            return response.end();
        })
    }else if (request.url.startsWith('/assets/')) {
        const imagePath = path.join(__dirname, request.url);
        fs.readFile(imagePath, (err, imagem) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.write('Imagem não encontrada');
                return response.end();
            }
            const imageExtension = path.extname(imagePath);
            const contentType = `image/${imageExtension.substring(1)}`;
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(imagem);
        });
    }
    
    // response.writeHead(200,{
    //     'Content-Type':'text/plain'
    // });
    // response.write('Bem-vindo ao meu servidor');
    // response.end();
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log("SERVIDOR RODANDO EM http:/localhost:${PORT}");
})