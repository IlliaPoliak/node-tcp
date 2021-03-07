const net = require('net');
const ws = require('ws');

const { PORT, IP } = require('./constansts/address');

const client = new net.Socket();

const wss = new ws.Server({ port: '8091' });


// TCP Connection

client.connect(PORT, IP, function() {
  console.log('TCP-connection open');
});

// client.destroy(); // kill client after server's response

client.on('data', function(data) {
  console.log('TCP:: received message: ' + data);
});

client.on('close', function() {
  console.log('TCP-connection closed');
});



// WebSocket Connection

wss.on('connection', function connection(ws, req) {
  ws.on('message', function incoming(message) {
    console.log('WS:: received message: ', message);
    client.write(message);
  });

  ws.send(`
    WebSocket response::
    adress:${req.socket.remoteAddress},
    port:${req.socket.remotePort}
  `);
});

console.log('Client server running');




