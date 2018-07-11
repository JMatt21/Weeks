let bands = require('./bands.js');

switch (process.argv[2]) {
    default: {
        for (band in bands) {
            console.log('A ' + band + ' band is ' + bands[band] + '.');
        }
    }
        break;
    case 'punk': console.log(bands.punk);
        break;
    case 'classic': console.log(bands.classic);
        break;
    case 'rap': console.log(bands.rap);
        break;
}