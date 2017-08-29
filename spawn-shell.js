/*
    Credits to Samer Buna
    Link to his article: https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

    The spawn function could also inherit the standard I/O of its parent and
    make use of the shell sintax 
*/

var spawn = require('child_process').spawn;

var child = spawn('find . -type f', {
    stdio: 'inherit',
    shell: true
});

child.on('error', (err) => {
    console.log('Failed to start child process.');
});