$(document).ready(function(){
  $('#guessDinos').hide();

  $('#rightDino').hide();

  $('#gameOver').hide();

  $('#form1').submit(function(event){
    event.preventDefault();
    $("#dinoHere").text(dinoAnswer);

    setTimeout(dinoHide, 5000);

    setInterval(showDinoInput, 5000);
  });

  wrongDino = 0;

  $('#form2').submit(function(event){
    event.preventDefault();
    var dinoNumber = $('#dinoInput').val();
    if (dinoNumber == dinoCount()) {
      $('#rightDino').show();
      $('#dinoResult').text('correct!');
    } else if (dinoNumber < dinoCount()) {
      $('#rightDino').show();
      $('#dinoResult').text('get higher, so the raptors do not eat you');

      wrongDino += 1;
    } else if (dinoNumber > dinoCount()) {
      $('#rightDino').show();
      $('#dinoResult').text('get lower, so the pterodactyls do not eat you');

      wrongDino += 1;
    } else {
      $('#rightDino').show();
      $('#dinoResult').text('breh sumthins up');
    };

     $('#wrongDinoCounter').text(wrongDino);

    if (wrongDino == 10) {
      $('#gameOver').show();
    }

  });



});
