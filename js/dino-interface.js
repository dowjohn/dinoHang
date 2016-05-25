

//API logic
var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=1').then(function(response){
  return dinoAnswer = response;
});

//Business logic

//Convert word into array
dinoSplit = function(dinoAnswer){
  dinoArray = dinoAnswer.split("", dinoAnswer.length - 3);
  var x = dinoArray.join("");
  var y = dinoReplace(x);
  return y;
}

//Replace word array with underscores
dinoReplace = function(x){
  return dinoUnderScore = x.replace(/[a-z]/gi,"_ ");
}
