const net = require('net');
const { PORT, IP } = require('./constansts/address');

const server = net.createServer(function(socket) {
	socket.write('Echo server');

	socket.on('data', function(data){
		const message = data.toString();

		console.log('Server:: received message: ', message);
		socket.write(message);
	});
});

server.listen(PORT, IP, function () {
	console.log("waiting for a connection");
});

console.log('Node server running');
