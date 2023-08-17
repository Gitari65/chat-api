const socket=io('http://localhost:3000')
const messageContainer= document.getElementById('message-container')
const messageForm=document.getElementById('send-container')
const messageinput=document.getElementById('message-input')
messageForm.addEventListener('submit',e=>{
    e.preventDefault();
    if(messageinput.value.trim()!==''){
        socket.emit('chat-message',messageinput.value)
        messageinput.value=''
    }
})
socket.on('chat-message',data=>{
    console.log(data)
    const messageElement= document.createElement('div')
    messageElement.innerText=data;
    messageContainer.appendChild(messageElement)

})
