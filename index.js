
const IP = '127.0.0.1'
const PORT = '8091'

const messageInput = document.getElementById('message')
const sendButton = document.getElementById('button')

sendButton.addEventListener('click', (e) => {
    const message = messageInput.value.trim();

    if (message) {
        console.log('sending message: ', message);
        
        ws.send(message);
        messageInput.value = '';
    }
})

const ws = new WebSocket(`ws:${IP}:${PORT}`)

ws.onmessage = (event) => {
    console.log("ws recieved message: ", event.data)
}

ws.onopen = () => {
    console.log("ws open")
}

ws.onclose = () => {
    console.log("ws close")
}






// ???
// const sender = new RTCRtpSender().rtcpTransport
// const receiver = new RTCRtpReceiver().transport
// const connection = new RTCPeerConnection().sctp.transport