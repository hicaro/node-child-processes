/* 
    Credits to Samer Buna
    Link to his article: https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

    this file is used as a part of fork.js demonstration.
*/

process.on('message', (msg) => {
    var sum = longComputation();
    process.send(sum);
});

var longComputation = () => {
    var sum = 0;
    for (var i = 0; i < 1e9; i++) {
      sum += i;
    };
    return sum;
};