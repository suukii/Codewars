var bowlingScore = function(rolls) {
  var score = 0;
  var frame = 1;
  for (var i = 0; i < rolls.length; i++) {
    switch(true) {
      case (rolls[i] + rolls[i + 1]) < 10:
        score += rolls[i] + rolls[i + 1];
        i++;
        frame++;
        break;
      case (rolls[i] !== 10) && ((rolls[i] + rolls[i + 1]) === 10) && (frame !== 10):
        score += 10 + rolls[i + 2];
        i++;
        frame++;
        break;
      case (rolls[i] !== 10) && ((rolls[i] + rolls[i + 1]) === 10) && (frame === 10):
        score += 10 + rolls[i + 2];
        i = rolls.length;
        break;
      case (rolls[i] === 10) && (frame !== 10):
        score += 10 + rolls[i + 1] + rolls[i + 2];
        frame++;
        break;
      case (rolls[i] === 10) && (frame === 10):
        score += 10 + rolls[i + 1] + rolls[i + 2];
        i = rolls.length;
        break;
    }
  }
  return score;
}
