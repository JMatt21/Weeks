const num1 = process.argv[2];
const num2 = process.argv[3];
if ((num1 % 7 == 0) && (num2 % 7 == 0)){
    console.log(true);
} else {
    console.log(false);
}