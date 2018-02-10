function toAcronym(input) {
  return input.split(" ").map(word => word[0].toUpperCase()).join("");
}
