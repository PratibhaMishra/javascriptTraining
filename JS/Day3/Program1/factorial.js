var factorial = function result(n) {
    if (n <= 1) {
        return 1;
    }
    return n * result(n-1);
}

factorial(5)