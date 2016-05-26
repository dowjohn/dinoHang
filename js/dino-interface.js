var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=' + Math.floor((Math.random() * 100) + 1)).then(function(response) {
  return dinoAnswer = response;
});

//Business logic

dinoThunder = function(dinoAnswer) {
  return dinoArray = dinoAnswer.split(" ");
};

//Set Time Out

dinoHide = function() {
  $("#dinoHere").hide();
}

showDinoInput = function() {
  $('#guessDinos').show();
}

dinoCount = function() {
  return dinoArray = dinoAnswer.split(" ").length;
}
