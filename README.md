# barebones HTML5 game template

This template supplies basic infrastructure that a good
web game can be built on, so that as the game developer, you can just
get on with writing that game.

**fast start**

* includes [Toji's game-shim polyfills](https://github.com/toji/game-shim) to
 smooth over browser differences 
* easy to pull in [some key libraries](https://github.com/gladiusjs/html5-game-template/wiki/game-library-volo-compatibility) from github using
 [James Burke's volo](https://github.com/volojs/volo)

**easy build & deploy**

* builds minified game configured for browser appcache using UglifyJS and almond.js
* trivial to deploy to a live server (currently supports github-pages)

**default best practices help your codebase scale**

* structured for maintainability using [RequireJS](requirejs.org)
* includes pre-configured QUnit test harness

**easy to specialize**

it should be easy to build higher-level, more specialized templates
(e.g. for a simple canvas game, a game based on the Gladius engine, or
an MMORPG) on top of this one.

# prerequisites
* be sure [node.js and npm](http://nodejs.org/) are installed and in your PATH
* (optional) if you wish to deploy to github pages, ensure that 
 [git](http://help.github.com/set-up-git-redirect) is installed and configured
* Use npm to install volo into your path, if it's not there already:

    > npm install -g volo

# let's get started

Create and configure a new copy of this game template:

    > volo create myNewGame gladiusjs/html5-game-template
    Downloading: https://nodeload.github.com/gladiusjs/html5-game-template/zipball/master
    Downloading: https://nodeload.github.com/toji/game-shim/zipball/master

Take a look around:

    > cd myNewGame
    > ls
    README.md       package.json    tools           www
    node_modules    test            volofile

Add any libraries that you intend to use.  volo uses github's search API to
find them and grabs the latest released version.

    > volo add three.js
    Using github repo "mrdoob/three.js" for "three.js"...
    Downloading: https://raw.github.com/mrdoob/three.js/master/build/Three.js
    Installed github:mrdoob/three.js/master at js/three.js
  
    > volo add stats.js
    Using github repo "mrdoob/stats.js" for "stats.js"...
    Downloading: https://raw.github.com/mrdoob/stats.js/master/build/Stats.js
    Installed github:mrdoob/stats.js/master at www/js/lib/stats.js
   
Do any development you like, putting tests into the test/ directory
infrastructure if you wish.  (Not shown :-)
   
Build a minified version complete with an appcache file:
   
    > volo appcache
    (...)

Deploy the built version to the gh-pages branch of suitably named repo:

    > volo ghdeploy
    Log in to GitHub to complete action (your password is not saved. It is sent over SSL to GitHub and converted to an OAuth token)
    GitHub user name: dmose
    GitHub password: 
    Contacting GitHub...
      (...)
    To git@github.com:dmose/monkeyGame.git
    e5dbfd4..1296c81  gh-pages -> gh-pages
    GitHub Pages is set up. Check http://dmose.github.com/monkeyGame/ in about 10-15 minutes.

# misc
* [FAQ](https://github.com/gladiusjs/html5-game-template/wiki/FAQ)
* upcoming features (depending in part on user feedback): jshint, [Mozilla
Persona auth](http://www.mozilla.org/en-US/persona/about/), Node.js server side piece

# credits

Main developers: Dan Mosedale and James Burke 

This template is based on, and still shares code with, James Burke's
(create-responsive-template)[https://github.com/volojs/create-responsive-template]
for [volo](https://github.com/volojs/volo), and leans heavily on volo.
Thanks to the contributors to both volo and create-responsive-template.

Thanks to Alan Kligman for helping crispify various parts of the 
the documentation and what we're shipping.

Thanks also to the authors of the following:

* [node.js](http://nodejs.org/)
* [almond.js](https://github.com/jrburke/almond)
* [RequireJS](http://requirejs.org)
* [r.js](https://github.com/jrburke/r.js/)
* [QUnit](http://docs.jquery.com/QUnit)
* [game-shim](https://github.com/toji/game-shim)
* and, of course, [git](http://git-scm.com/) and [github](http://github.com/)

