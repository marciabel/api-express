const express = require('express')

class Server{

    constructor() {
        this.port = process.env.PORT || 3000;

        this.app = express();

        this.middleware();

        this.routers();
    }

    middleware() {
        this.app.use(express.static('public'));
    }

    routers() {
        this.app.use('/api-express/v1', require('../routes/mar'))
        this.app.use('/api-express/v1', require('../routes/pame'))
    }

    listen () {
        this.app.listen (this.port, () => {
            console.log(`App escuchando en el puerto ${process.env.PORT}`);
        });
    }
}

module.exports = Server;