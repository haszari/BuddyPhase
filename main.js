
define('main', ['jquery'], function($) {

  setTimeout(function() {
    var lefty = $(".left video")[0];
    var righty = $(".right video")[0];


    lefty.play();
    righty.play();
  }, 200)

});