//求1-n之间的和
function getn(n) {
    if (n === 1) {
        return 1;
    }
    return n * getn(n - 1);
}
console.log(getn(10))