let fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(error, data){
    if(error){
        console.log(error);
    }
    console.log(data.split(', ').join('\n'));
});