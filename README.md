# barebones template of infrastructure useful to most games
**fast start**

* includes [Toji's game-shim polyfills](https://github.com/toji/game-shim) to
 smooth over browser differences 
* easily pull in [key libraries](FAQ.html) from github using
 [volo](https://github.com/volojs/volo)

**easy build & deploy**

* builds minified game configured for browser appcache using UglifyJS and almond.js
* deploy to a live server trivially (currently supports github-pages)

**default best practices help your codebase scale**

* structured for maintainability using require.js
* includes qunit test harness

# philosophy
This barebones template supplies some basic infrastructure that a good
web game can be built on, so that as the game developer, you can just get on
with writing your game.  

Higher-level, more specialized templates (e.g. for a simple canvas game or an MMORPG) would make sense to build on top of this one.

Note that this is current focussed entirely on the browser-based pieces of a
game, but making it easy for a game to offer a Node-based server-side
component is likely to be in scope in the fairly near future.


# prerequisites
* be sure node.js and npm are installed and in your PATH
* (optional) if you wish to deploy to github pages, ensure that git is installed and in your PATH
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
* FAQ
* more documentation to come
* up next: jshint, app store wiring, mozilla persona wiring  

