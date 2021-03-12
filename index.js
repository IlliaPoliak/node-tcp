const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

ws = new WebSocket(`ws:127.0.0.1:8091`)

sendButton.addEventListener('click', e => {
    const message = messageInput.value.trim();

    if (message) {
        console.log('ws send message: ', message);
        
        ws.send(message);
        messageInput.value = '';
    }
})

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