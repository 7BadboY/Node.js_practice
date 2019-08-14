const http = require('http');
const port = 3001;

const requestHandler = function(request, response) {
    switch( request.method) {
        case 'GET':
            console.log('this is get method');
            
            if(request.url === '/test') {
                response.statusCode = 200;
                response.setHeader('Content-type', "application/json");
                return response.end(
                    JSON.stringify({'message' : 'You have an actually version of programing station'})
                );   
            }
            
            break;
        case 'POST':
            console.log('You have an actually version of programing station');
            break;
    }

    response.writeHead(200, {'Content-type': 'plain/text'});
    response.end('Hello world');
};

const server = http.createServer(requestHandler);
server.listen(port, err => {
    console.log(`server fucked on port number: ${port}`);
    
});