const chat = document.querySelector(".message-window");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById('sendButton');
const locationButton = document.getElementById('locationButton');

let socket;
let lastMessageWasGeo = false; 

window.addEventListener('DOMContentLoaded', () =>{
    socket = new WebSocket('wss://ws.postman-echo.com/raw');
    // socket = new WebSocket('wss://echo-ws-service.herokuapp.com');

    socket.onopen = () => {
        console.log('Connected with server');
        addMessage('Connected succesfull', 'received');
    };
    socket.onmessage = (event) =>{
        if(lastMessageWasGeo){
            console.log('Get geo - ignore');
            lastMessageWasGeo = false;
            return;
        }
        addMessage(event.data, 'received');
    };
    socket.onerror = (error) =>{
        addMessage('Oshibka bro', 'received');
        console.log('WebSocket error', error);
    };
    socket.onclose = () =>{
        addMessage('Connect was closed', 'received');
    };
});

function addMessage(text,type){
    const messageDiv = document.createElement('div');
    messageDiv.classList.add("message", type);
    messageDiv.textContent = text;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage(){
    const text = messageInput.value.trim();
    if(!text || !socket || socket.readyState !== WebSocket.OPEN) return;

    addMessage(text, 'sent');
    socket.send(text);
    messageInput.value = '';

}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        sendMessage();
    }
});

locationButton.addEventListener('click', () =>{
    if(!navigator.geolocation){
        addMessage('Geo not support', 'received');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) =>{
            const {latitude, longitude} = position.coords;
            const locationText = `My coordinates: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
            const mapLink = `https://www.openstreetmap.org/#map=16/${latitude}/${longitude}`;

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'sent');

            const link = document.createElement('a');
            link.href = mapLink;
            link.target = '_blank';
            link.textContent = '🗺️ Открыть моё местоположение на OpenStreetMap';
            link.style.color = 'white';
            link.style.textDecoration = 'underline';

            messageDiv.appendChild(link);
            chat.appendChild(messageDiv);
            chat.scrollTop = chat.scrollHeight;

            if (socket && socket.readyState === WebSocket.OPEN) {
                lastMessageWasGeo = true;
                socket.send(locationText);
            }
        },
        (error) => {
            let errorMsg = 'Cant get geo';
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    errorMsg += 'Доступ запрещён.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMsg += 'Информация недоступна.';
                    break;
                case error.TIMEOUT:
                    errorMsg += 'Запрос истек.';
                    break;
                default:
                    errorMsg += 'Неизвестная ошибка.';
            }
            addMessage(errorMsg, 'received');
        }
    );
});