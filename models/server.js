//Servidor de express
const express = require('express');
//Servidor de sockets
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT ;
        //Crear http Server
        this.server = http.createServer(this.app);
        //Configuracion del socket server
        this.io = socketio(this.server, { /*  Configuraciones */ });
    }

    middlewares() {
        //Desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    configurarSockets() {
       new Sockets( this.io );
    }


    execute() {
        //Inicializar middlewares
        this.middlewares();

        //Inicializat sockets
        this.configurarSockets();

        //Inicializar server
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });
    }


}

module.exports = Server;