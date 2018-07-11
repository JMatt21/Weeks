const fs = require('fs');
const file_name = 'BankInfo.txt';
const action = process.argv[2];
const option1 = process.argv[3];

switch (action) {
    case 'total': {
        let ret = 0;
        fs.readFile(file_name, 'utf8', function (err, data) {
            if (err) console.log(err);
            let dataArr = data.split(',');
            for (amount of dataArr) {
                if (amount) ret += parseFloat(amount);
            }
            console.log(ret);
        });
    }
        break;
    case 'withdraw': {
        fs.appendFile(file_name, '-' + option1 + ',', function (err) {
            if (err) console.log(err);
        });
    }
        break;
    case 'deposit': {
        fs.appendFile(file_name, option1 + ',', function (err) {
            if (err) console.log(err);
        });
    }
        break;
    case 'lotto': {
        if (Math.floor(Math.random() * 10) + 1 == 1) {
            fs.appendFile(file_name, '10,', function (err) {
                if (err) console.log(err);
            });
        } else {
            fs.appendFile(file_name, '-0.25,', function (err) {
                if (err) console.log(err);
            });
        }
    }
        break;
    default: console.log("Invalid action. Please try again.");
        break;
}
