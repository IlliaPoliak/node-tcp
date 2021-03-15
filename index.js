const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

ws = new WebSocket(`ws:127.0.0.1:8091`)

let startTime;
let endTime;

sendButton.addEventListener('click', e => {
    const message = messageInput.value.trim();

    if (message) {
        console.log('ws send message: ', message);
        
        startTime = new Date();
        ws.send(message);
        messageInput.value = '';
    }
})

ws.onopen = () => {
    console.log("ws open")
}

ws.onclose = () => {
    console.log("ws close")
}

ws.onmessage = (event) => {
    endTime = new Date();
    console.log("ws recieved message: ", event.data)
    console.log('time: ', endTime - startTime, ' ms')
}
