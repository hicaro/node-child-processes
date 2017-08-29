/* 
    Credits to Samer Buna
    Link to his article: https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

    Fork is a variation of spawn for spawning node processes.

    The biggest difference between spawn and fork is that a communication channel is established to the child process when using fork.
    This way we can use the send function on the forked process along with the global process object itself to exchange messages between the parent and forked processes.
*/

var fork = require('child_process').fork;
var http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/compute') {
        var compute = fork('child.js');

        compute.send('start');
        compute.on('message', (msg) => {
            res.end(`Sum is ${msg}`);
        });
    } else {
        res.end('OK');
    }
});

server.listen(3000);
