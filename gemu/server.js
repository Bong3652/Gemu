var express = require("express");

var app = express();
var server = app.listen(3000);

app.use(express.static("public"));

console.log("Waiting for client to connect...");

var socket = require("socket.io");

var io = socket(server);
io.sockets.on("connection", newConnection);

function newConnection(socket) {
    console.log("New client: " + socket.id);

    socket.on('snake', snakeMsg);

    function snakeMsg(data) {
        socket.broadcast.emit('snake', data);
        console.log(data);
    }
    
    // socket.on("ball", ballMsg);

    // function ballMsg(data) {
    //     console.log(data);
    // }

    // socket.on("food", foodMsg);

    // function foodMsg(data) {
    //     console.log(data);
    // }
}