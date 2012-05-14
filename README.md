# minimalist game template lets you hit the ground coding

**fast start**

* includes [Toji's game-shim polyfills](https://github.com/toji/game-shim) to smooth over browser differences 
* easily pull in key libraries from github *(FAQ link) using volo

**easy build & deploy**

* builds minified game configured for browser appcache using UglifyJS and almond.js
* deploy to a live server trivially (currently supports github-pages)

**default best practices help your codebase scale**

* structured for maintainability using require.js
* includes qunit test harness

The philosophy of this template is to provide basic infrastructure pieces
that are required by almost every game, and to make it easy to pull in
libraries specific to your game using volo.  Higher-level, more specialized
templates (e.g. for a first-person shooter or an MMORPG) would make sense
to build on top of this one.

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
    Save OAuth token for later use [y]? 
    Cannot save local config, continuing without saving.
    dmose, name of github repo [myNewGame]: monkeyGame
    Initialized empty Git repository in /Users/dmose/s/games/myNewGame/www-ghpages/.git/
    [gh-pages (root-commit) e5dbfd4] Create branch.
    1 file changed, 1 insertion(+)
    create mode 100644 index.html
    To git@github.com:dmose/monkeyGame.git
    * [new branch]      gh-pages -> gh-pages
    [gh-pages 1296c81] Deploy
    4 files changed, 42 insertions(+), 1 deletion(-)
    create mode 100644 css/app.css
    create mode 100644 js/app.js
    create mode 100644 manifest.appcache
    create mode 100644 manifest.webapp
    To git@github.com:dmose/monkeyGame.git
    e5dbfd4..1296c81  gh-pages -> gh-pages
    GitHub Pages is set up. Check http://dmose.github.com/monkeyGame/ in about 10-15 minutes.

# misc
* FAQ
* more documentation to come
* up next: jshint, app store wiring, mozilla persona wiring  

