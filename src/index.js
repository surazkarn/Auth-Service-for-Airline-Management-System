const express = require('express');

const {PORT} = require('./config/serverConfig')

const app = express();

const prepareAndStartServer = () => {
    
    app.listen(3003, () => {
        console.log(`Server Started on PORT: ${PORT}`);
    })
}

prepareAndStartServer();