$(document).ready(function(){
  $('#form1').submit(function(event){
    event.preventDefault();
    $("#dinoHere").text(dinoAnswer);
  });

});
