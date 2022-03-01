"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("ace/mode/gitignore_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");

  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var GitignoreHighlightRules = function GitignoreHighlightRules() {
    this.$rules = {
      "start": [{
        token: "comment",
        regex: /^\s*#.*$/
      }, {
        token: "keyword",
        // negated patterns
        regex: /^\s*!.*$/
      }]
    };
    this.normalizeRules();
  };

  GitignoreHighlightRules.metaData = {
    fileTypes: ['gitignore'],
    name: 'Gitignore'
  };
  oop.inherits(GitignoreHighlightRules, TextHighlightRules);
  exports.GitignoreHighlightRules = GitignoreHighlightRules;
});
define("ace/mode/gitignore", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/gitignore_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");

  var TextMode = require("./text").Mode;

  var GitignoreHighlightRules = require("./gitignore_highlight_rules").GitignoreHighlightRules;

  var Mode = function Mode() {
    this.HighlightRules = GitignoreHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
  };

  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "#";
    this.$id = "ace/mode/gitignore";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

(function () {
  window.require(["ace/mode/gitignore"], function (m) {
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && module) {
      module.exports = m;
    }
  });
})();