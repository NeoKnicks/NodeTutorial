const fs = require('fs');

let content;

console.log('Start - Reading File');

fs.readFile('file.md', 'utf-8', function(err, content) {
    if(err) {
        console.log('Error In Reading The File ');
        return console.log(err);
    }

    console.log(content);
});

console.log('Finish - Reading File');