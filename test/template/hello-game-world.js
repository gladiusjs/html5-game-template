
module("basic functionality provided by the game template");

asyncTest("installing game-shim", function() {

  expect(1);

  require(['../www/js/lib/game-shim'], function () {
    ok('GameShim' in window, 
       'GameShim property in global object after requiring');
    start();
  });
  
});
