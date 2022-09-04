const socket = io();

socket.on('from-server-mensajes', data =>{
    render(data.DB_MENSAJES);
})

function render(mensajes){
    const cuerpoMensajesHTML = mensajes.map((msj)=>{
        return `<span><b>${msj.author}: </b><span>${msj.text}</span></span>`;
    }).join('<br>')
    document.querySelector('#historial').innerHTML = cuerpoMensajesHTML;
    
}

function enviarMensaje(){
    const inputUser = document.querySelector('#user');
    const inputContenido = document.querySelector('#contenidoMensaje');

    const mensaje = {
        author: inputUser.value,
        text: inputContenido.value
    }

    socket.emit('from-client-mensaje', mensaje);
}