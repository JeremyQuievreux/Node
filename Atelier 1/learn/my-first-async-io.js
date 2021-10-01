const { argv } = require('process');
const fs = require('fs');

fs.readFile( argv[2],"utf-8", (err,data) => {
    if (err) throw err;
    console.log(data.split(`\n`).length - 1);
})

/* console.log(buf); */