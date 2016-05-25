//API logic
var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=1').then(function(response){
  return dinoAnswer = response;
});

//Business logic
dinoSplit = function(dinoAnswer){
  dinoArray = dinoAnswer.split("", dinoAnswer.length - 3);
  return dinoArray;
}
