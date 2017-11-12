const lib = require('./lib/lib.js');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk) {
        let inputArray = chunk.toString().split(' ', 2);
        if (inputArray.every(lib.executeChecks)) {
            process.stdout.write(`${inputArray.reduce(lib.add)}`);
        }
    }
});