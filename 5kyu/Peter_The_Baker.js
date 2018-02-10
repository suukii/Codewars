function cakes(recipe, available) {
  var arr = [];
  for (property in recipe) {
    if (!available.hasOwnProperty(property)) {
      return 0;
    } else {
      arr.push(Math.floor(available[property] / recipe[property]));
    }
  }
  return Math.min(...arr);
}
