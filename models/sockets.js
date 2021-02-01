class Sockets {

    constructor(io) {

        this.io = io;
        this.socketEvents();

    }

    socketEvents() {

        //on conecction
        this.io.on('connection', (socket) => {

            //Escuchar evento
            socket.on('mensaje-to-server', (data) => {
                console.log(data)
                this.io.emit('mensaje-from-server', data);
            });

            //Nuevo evento
        });
    }

}

module.exports = Sockets;