function encryptedData(data){
    console.log(`encrypted ${data}.`);
}
function send(url, data){
    encryptedData(data);
}

module.exports={
    send,
}