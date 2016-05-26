$(document).ready(function(){
  $('#guessDinos').hide();

  $('#rightDino').hide();

  $('#form1').submit(function(event){
    event.preventDefault();
    $("#dinoHere").text(dinoAnswer);

    setTimeout(dinoHide, 5000);

    setInterval(showDinoInput, 5000);
  });

  $('#form2').submit(function(event){
    event.preventDefault();
    var dinoNumber = $('#dinoInput').val();

    if (dinoNumber <= dinoCount()) {
      $('#rightDino').show();
    }
  });



});
