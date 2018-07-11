let fs = require('fs');

fs.appendFile('cat.txt', 'hello cat\n', function(err){
    if(err){
        console.log(err);
    }
    console.log('text appended to file.')
});