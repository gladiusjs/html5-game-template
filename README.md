# minimalist game template lets you hit the ground coding

**fast start**

* includes Toji's game-shim polyfills to smooth over browser differences 
* easily pull in key libraries from github *(FAQ link) using volo

**easy build & deploy**

* builds performant, minified game configured for browser appcache with UglifyJS and almond.js
* deploy to a live server trivially (currently supports github-pages)

**default best practices help your codebase scale**

* structured for maintainability using require.js
* includes qunit test harness

* (coming soon)
* (FAQ)

# prerequisites
* be sure node.js and npm are installed and in your PATH
* (optional) if you wish to deploy to github pages, ensure that git is in your PATH
* Use npm to install volo into your path, if it's not there already:

    > npm install -g volo
    npm http GET https://registry.npmjs.org/volo
    npm http 200 https://registry.npmjs.org/volo
    /opt/local/bin/volo -> /opt/local/lib/node_modules/volo/bin/volo
    volo@0.1.4 /opt/local/lib/node_modules/volo
    
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

Test it out (not shown :-).

Deploy the built version to the gh-pages branch of suitably named repo:

    > volo ghdeploy
    (...)
