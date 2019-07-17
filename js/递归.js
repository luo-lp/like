//求1-n之间的和
function getn(n) {
    if (n === 1) {
        return 1;
    }
    return n * getn(n - 1);
}
console.log(getn(10))
//求斐波那契
function fn(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fn(n - 1) + fn(n - 2);
}