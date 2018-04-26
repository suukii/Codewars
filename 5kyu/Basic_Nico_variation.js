function nico (key, message) {
    var pos = key.split("")
    .map((char, i) => [char, i])
    .sort()
    .map((ele, i) => ele.concat(i))
    .sort((a, b) => a[1] - b[1])
    .map(ele => ele[2]);
    
    var k = key.length,
        m = message.length;
    
    if (m % k !== 0) {
        message += " ".repeat(k - m % k);
    }
    
    var cipher = [];
    message = message.split("");
    for (var i = 0; i <= m / k; i++) {
      cipher.push(message.splice(0, k));
    }

    for (var i = 0; i < cipher.length; i++) {
    	cipher[i] = cipher[i].map((char, i) => [char, pos[i]])
    	                     .sort((a, b) => a[1] - b[1])
    	                     .map(ele => ele[0])
    	                     .join("");
    }

    return cipher.join("");
}
