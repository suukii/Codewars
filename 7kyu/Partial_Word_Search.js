function wordSearch(query, seq){
  var re = new RegExp(query, "i");
  var res = [];
  for (var i = 0; i < seq.length; i++) {
    if (re.test(seq[i])) {
      res.push(seq[i]);
    }
  }
  return res.length ? res : ["Empty"];
}
