const Websocket = require("ws");

const WebsocketServer = new Websocket.Server({ port:8050 });

WebsocketServer.on("connection", client =>{
    console.log("New client has connected!");

    client.send("Hello".toLowerCase());

    client.on("close", ()=>{
            console.log("Client has disconnected!")
        });
});