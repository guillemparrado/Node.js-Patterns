/*
FONTS:
 https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
 */

const amqp = require('amqplib/callback_api');

// Create readline interface
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Connect to RabbitMQ server
amqp.connect('amqp://localhost', async function (error, connection) {
    if (error) throw error;

    // Create a channel
    connection.createChannel(async function (error, channel) {
        if (error) throw error;

        // Create queue
        const queue = 'hello';
        channel.assertQueue(queue, {
            durable: false
        });

        // Get messages from stdin
        console.log(`(Type exit to exit)`);
        while(true){
            try{
                await new Promise((resolve, reject) => {
                    rl.question('Message to send: ', msg => {
                        if(msg === 'exit')
                            reject();
                        // Send messages to queue
                        else {
                            channel.sendToQueue(queue, Buffer.from(msg));
                            console.log(` [x] Sent: ${msg}`);
                            resolve();
                        }
                    })
                })
            // Exit
            } catch(e) {
                break;
            }
        }

        // Exit App
        console.log('Exiting app...');
        // Close rl interface
        rl.close();
        // Close RabbitMQ connection
        connection.close();
    });
});
