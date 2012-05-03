
module("basic functionality provided by the game template");

asyncTest("installing game-shim", function() {

  expect(1);
  
  // Because GameShim installs itself in the window global,
  // and there's no real way to uninstall it without writing the inverse
  // code for most of the shim.  So all subsequent tests are going to run
  // in this modified environment.  Yuck.
  //
  require(['../www/js/lib/game-shim'], function () {
    ok('GameShim' in window, 
       'GameShim property in global object after requiring');
    start();
  });
  
});
