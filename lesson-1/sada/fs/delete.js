const fs = require('fs');

fs.unlink('asd.txt',(err) => {
    if (err) {
        throw err;
    }
    console.log('File hasbeen deleted.');    
})