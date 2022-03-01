"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("ace/ext/themelist", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  var themeData = [["Chrome"], ["Clouds"], ["Crimson Editor"], ["Dawn"], ["Dreamweaver"], ["Eclipse"], ["GitHub"], ["IPlastic"], ["Solarized Light"], ["TextMate"], ["Tomorrow"], ["Xcode"], ["Kuroir"], ["KatzenMilch"], ["SQL Server", "sqlserver", "light"], ["Ambiance", "ambiance", "dark"], ["Chaos", "chaos", "dark"], ["Clouds Midnight", "clouds_midnight", "dark"], ["Dracula", "", "dark"], ["Cobalt", "cobalt", "dark"], ["Gruvbox", "gruvbox", "dark"], ["Green on Black", "gob", "dark"], ["idle Fingers", "idle_fingers", "dark"], ["krTheme", "kr_theme", "dark"], ["Merbivore", "merbivore", "dark"], ["Merbivore Soft", "merbivore_soft", "dark"], ["Mono Industrial", "mono_industrial", "dark"], ["Monokai", "monokai", "dark"], ["Nord Dark", "nord_dark", "dark"], ["One Dark", "one_dark", "dark"], ["Pastel on dark", "pastel_on_dark", "dark"], ["Solarized Dark", "solarized_dark", "dark"], ["Terminal", "terminal", "dark"], ["Tomorrow Night", "tomorrow_night", "dark"], ["Tomorrow Night Blue", "tomorrow_night_blue", "dark"], ["Tomorrow Night Bright", "tomorrow_night_bright", "dark"], ["Tomorrow Night 80s", "tomorrow_night_eighties", "dark"], ["Twilight", "twilight", "dark"], ["Vibrant Ink", "vibrant_ink", "dark"]];
  exports.themesByName = {};
  exports.themes = themeData.map(function (data) {
    var name = data[1] || data[0].replace(/ /g, "_").toLowerCase();
    var theme = {
      caption: data[0],
      theme: "ace/theme/" + name,
      isDark: data[2] == "dark",
      name: name
    };
    exports.themesByName[name] = theme;
    return theme;
  });
});

(function () {
  window.require(["ace/ext/themelist"], function (m) {
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && module) {
      module.exports = m;
    }
  });
})();