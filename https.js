const req = require('./request');
const response = require('./response');

function request(url, data){
    req.send(url, data);
    return response.read();
}

request('https://www.google.com','hello'); 