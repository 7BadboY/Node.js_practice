const fs = require('fs');

fs.appendFile('test.txt', '1231', (err) => {
    if (err) {
        console.error(err);
        
    }
});

fs.open('asd.txt','w', err => {
    if (err) {
        console.error(err);
        
    }
});