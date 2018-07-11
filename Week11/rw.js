// let fs = require("fs");
// fs.writeFile('test.txt', 'some, text, here', function (error) {
//     //filepath   //filetext      //error function
//     if (error) {
//         return console.log(error)
//     }
// });

// fs.readFile('test.txt', 'utf8', function (error, data) {
//     if (error) {
//         return console.log(error)
//     }
//     console.log(data);
//     let dataArr = data.split(', ');
//     console.log(dataArr, dataArr.length);
// });
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});