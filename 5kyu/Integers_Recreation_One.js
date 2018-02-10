function listSquared(m, n) {  
    var sum = 0;
    var res = [];
    var divisors;
    for (var i = m; i <= n; i++) {
    	divisors = [];
        for (var j = 1; j <= Math.floor(i / 2); j++) {
            if (i % j) {
                continue;
            }
            divisors.push(j);
        }
        divisors.push(i);
        
        sum = divisors.reduce(((a, b) => a + b*b), 0);    
        if (Math.sqrt(sum) % 1 === 0) {
            res.push([i, sum]);
        }
    }
    return res;
}
