let numbers = [];
for (let i = 2; process.argv[i]; i++){
    numbers.push(process.argv[i]);
}
console.log(numbers.sort((prev, curr) => prev-curr));