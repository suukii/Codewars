function encodeStr(s, shift) {
    var str = "";
    var res = [];
    var prefix = s[0].toLowerCase() + String.fromCharCode(s[0].toLowerCase().charCodeAt(0) + shift);
    str += prefix;
    
    for (var i = 0; i < s.length; i++) {
      var code = s.charCodeAt(i);
      if (code >= 65 && code <= 122) {
        str += String.fromCharCode(code + shift);
      }
      else {
        str += String.fromCharCode(code);
      }  
    }
    
    var len = str.length;
    if (len % 5 === 0) {
      for (var i = 0; i < 5; i++) {
        res.push(str.slice(0, len / 5));
        str = str.slice(len / 5);
      }
    }
    else {
      for (var i = 0; i < 4; i++) {
        res.push(str.slice(0, Math.floor(len / 5) + 1));
        str = str.slice(Math.floor(len / 5) + 1);
      }
      res.push(str);
    }
    
    return res[res.length - 1] ? res : res.slice(0, res.length - 1);
}

function decode(arr) {
    var code = arr.join("");
    var prefix = code.slice(0, 2);
    code = code.slice(2);
    var shift = prefix.charCodeAt(1) - prefix.charCodeAt(0);
    var res = "";
    for (var i = 0; i < code.length; i++) {
      if (code.charCodeAt(i) - shift >= 65 && code.charCodeAt(i) - shift <= 122) {
        res += String.fromCharCode(code.charCodeAt(i) - shift);
      }
      else {
        res += String.fromCharCode(code.charCodeAt(i));
      }
    }
    return res;
}
