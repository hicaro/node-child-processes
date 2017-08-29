/* 
    Credits to Samer Buna
    Link to his article: https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

    By default, the exec function creates a shell to execute the command we pass into it.
    It buffers the command’s generated output and passes the whole output value to a callback function.

    Important: Note that using the shell syntax comes at a security risk.
    If executing any kind of dynamic input provided externally, 
    a user can simply do a command injection attack using shell syntax characters like ; and $ 
    (for example, command + '; rm -rf ~')


    Note: If you need to execute a file without using a shell, 
    the execFile function is what you need. It behaves exactly like the exec function, 
    but does not use a shell, which makes it a bit more efficient.
*/

var exec = require('child_process').exec;

/*
    Since the exec function uses a shell to execute the command, 
    we can use the shell syntax directly here making use of the shell pipe feature.
*/
exec('find . -type f | wc -l', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
  
    console.log(`Number of files ${stdout}`);
});