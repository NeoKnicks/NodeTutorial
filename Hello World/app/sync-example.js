const fs = require('fs');

let content;

try {
    console.log('Trying To Read The File');
    content = fs.readFileSync('file.md', 'utf-8');
} catch(ex) {
    console.log('Error Occured While Reading The File ' + ex);
}

console.log(content);