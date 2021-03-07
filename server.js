const net = require('net');
const { PORT, IP } = require('./constansts/address');

const server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');

	socket.on('data', function(data){
		const message = data.toString('utf8');

		console.log('Server:: received message: ', message);
		socket.write(message);
	});
});

server.listen(PORT, IP);
console.log('Node server running');
