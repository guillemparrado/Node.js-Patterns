
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error, connection) {
    if (error) throw error;

    // Create connection
    connection.createChannel(function(error, channel) {
        if (error) throw error;

        // Create queue
        const queue = 'hello';
        channel.assertQueue(queue, {
            durable: false
        });

        // Consume messages
        console.log(" [*] Waiting for messages in '%s'", queue);
        channel.consume(queue, function(msg) {
            // And log them
            console.log(` [x] Received: ${msg.content.toString()}`);
        }, {
            noAck: true
        });
    });
});
