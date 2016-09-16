//---- Automated Grade ----//

//The function autoGrade should take as an argument a report (string) of all student grades
//and return both the class average and the average of each student, rounding any calculations to the nearest 2
//decimal places.
//For example: "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18"  
//              => { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

function autograde (report) {
  //split the string into an array of student and they're grades
  var split = report.split('\n');
  //split each array on spaces
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].split(' ');
  }
  
  //iterate through each students array separating their name and scores
  var result = {"classAve": 0};
  var totalScore = [];
  for (var i = 0; i < split.length; i++) {
    var name = "";
    var score = 0;
    var numScores = 0;
    for (var j = 0; j < split[i].length; j++) {
      if (/[a-zA-Z]/.test(split[i][j])) {
        name+= split[i][j];
      }
      if (/[0-9]/.test(split[i][j])) {
        score+= +split[i][j];
        totalScore.push(+split[i][j]);
        numScores++;
      }
    }
    //push key-value pair of student and their averaged scores to result object
    result[name] = score / numScores;
  }
  //average total score
  var ave = totalScore.reduce((a, b) => a + b) / totalScore.length;
  result.classAve = +ave.toFixed(2);
  return result;
}