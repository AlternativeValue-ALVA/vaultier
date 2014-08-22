##jsep: A JavaScript Expression Parser
[jsep](http://jsep.from.so/) is a simple expression parser written in JavaScript. It can parse JavaScript expressions but not operations. The difference between expressions and operations is akin to the difference between a cell in an Excel spreadsheet vs. a proper JavaScript program.

###Why jsep?
I wanted a lightweight, tiny parser to be included in one of my other libraries. [esprima](http://esprima.org/) and other parsers are great, but had more power than I need and were *way* too large to be included in a library that I wanted to keep relatively small.

jsep's output is almost identical to [esprima's](http://esprima.org/doc/index.html#ast), which is in turn based on [SpiderMonkey's](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API).

###Custom Build
First, install [Grunt](http://gruntjs.com/). While in the jsep project directory, run:

    npm install .
    grunt

The jsep built files will be in the build/ directory.

###Usage
####Client-side
    <script src="/PATH/TO/jsep.min.js" type="text/javascript"></script>
    ...
    var parse_tree = jsep("1 + 1");
####Node.JS
    var jsep = require("jsep");
    var parse_tree = jsep("1 + 1");

###License
jsep is under the MIT license. See LICENSE file.

###Thanks
Some parts of the latest version of jsep were adapted from the esprima parser.
