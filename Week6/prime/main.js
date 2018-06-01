function isPrime(number){
    var bool = true;
    for (var i = 2; i <= Math.sqrt(number) && bool; i++){
        if (number % i == 0){
            bool = false;
        }
    }
    return bool;
}

for(var i = 1; i <= 20; i++){
    console.log(i, isPrime(i));
}