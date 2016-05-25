var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15'),
    fillContainer = function(html) {
      $('#dinoDNA').html(html);
    },
    oops = function() {
      console.log('Where have all the good dinos gone?');
    };

getDinos.then(fillContainer, oops);
