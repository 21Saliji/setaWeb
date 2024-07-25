var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for serving the index.html file
app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/public/index.html');
});

// Socket.io connection handling
io.on('connection', function(client){
    console.log('Client connected...');
    
    // Handle 'join' event from client
    client.on('join', function(data){
        console.log(data);
    });
    
    // Handle 'messages' event from client
    client.on('messages', function(data){
        // Emit 'thread' event to the client that sent the message
        client.emit('thread', data);
        // Broadcast 'thread' event to all connected clients except the sender
        client.broadcast.emit('thread', data);
    });
});

// Server listening on port 7777
server.listen(7777, function(){
    console.log('Server running on http://localhost:7777');
});
