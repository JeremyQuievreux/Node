const { argv } = require('process');
const fs = require('fs');

const extension = argv[3];

console.log(argv);

fs.readdir(argv[2], "txt", (err, file)=>{
    if (err) throw err;
    console.log(file);
})

fs.readdir(argv[2] , (err, files) => {
    if (err){
        console.log(err);
    } else {
        console.log("Filenames with the .txt extension:");
        files.forEach(file => {
            if (path.extname(file) == extension)
                console.log(file);
            })
        }
  });