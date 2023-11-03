function fib(n){
    let previous = 0;
    let current = 1;
    for(let i = 2; i <=n; i++){
        const next = previous + current;
        previous = current;
        current = next;
        console.log(current);
    }
    return current;
}
fib(9);