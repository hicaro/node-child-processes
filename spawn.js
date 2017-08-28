/*
    Credits to Samer Buna
    Link to his article: https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

    Events that we can register handlers for with the child_process instances are:
    - disconnect;
    - exit;
    - error;
    - close;
    - and message.
*/

var spawn = require('child_process').spawn;

// example using pwd command - current directory path
var pwd = spawn('pwd');

// signal is null when child exits normally
pwd.on('exit', function (code, signal) {
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