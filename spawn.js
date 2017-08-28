/*
    Credits to Samer Buna
    Link to his article: https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

    The spawn function launches a command in a new process and we can use it to pass that command any arguments.

    By default, the spawn function does not create a shell to execute the command we pass into it.
    Also, the spawn function uses streams instead of buffers.    
*/

var spawn = require('child_process').spawn;

// example using pwd command - current directory path
var pwd = spawn('pwd');

// signal is null when child exits normally
pwd.on('exit', (code, signal) => {
    console.log('child process exited with ' +
            `code ${code} and signal ${signal}`);
});

pwd.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});
  
pwd.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
});

// example using wc command - counts lines, words, and characters; and find
var find    = spawn('find', ['.', '-type', 'f']);
var wc      = spawn('wc', ['-l']); // counts only the lines

// pipe the standard input/output of multiple processes on each other
// equivalent to find . -type f | wc -l
find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`Number of files: ${data}`);
});