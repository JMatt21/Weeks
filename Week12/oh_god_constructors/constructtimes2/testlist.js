const LinkedList = require('./linkedlist');

let test = new LinkedList();

for (let i = 0; i < 15; i++){
    test.addToLast(i);
}
// console.log(test);
test.addToFirst(15);
test.display();