const { argv } = require('process');
const fs = require('fs');

const buf = fs.readFileSync( argv[2], "utf-8")


console.log(buf.split(`\n`).length - 1); 