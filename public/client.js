$(document).ready(function(){
    var socket = io.connect('http://localhost:7777');

    // Listen for 'thread' event from the server
    socket.on('thread', function(data){
        $('#chat').append('<li>' + data + '</li>');
    });

    // Handle form submission using jQuery
    $('form').submit(function(){
        var message = $('#message').val(); // Get the value from the input field
        socket.emit('messages', message); // Emit the message to the server
        $('#message').val(''); // Reset the input field
        return false; // Prevent default form submission
    });
});
