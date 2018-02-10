function ghostBusters(building) {
  var re = /\s+/g;
  return re.test(building) ? building.replace(re, "") : "You just wanted my autograph didn't you?";
}
