'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var make = React.forwardRef((function (Props, ref) {
        var children = Props.children;
        var match = React.useState((function () {
                return true;
              }));
        var setShow = match[1];
        React.useEffect((function () {
                var id = setInterval((function (param) {
                        return Curry._1(setShow, (function (previousShow) {
                                      return !previousShow;
                                    }));
                      }), 1000);
                return (function (param) {
                          clearInterval(id);
                          
                        });
              }), ([]));
        var style = match[0] ? ({
              opacity: "1",
              transition: "opacity 1s"
            }) : ({
              opacity: "0",
              transition: "opacity 1s"
            });
        var ensuredRef = Belt_Option.map((ref == null) ? undefined : Caml_option.some(ref), (function (prim) {
                return prim;
              }));
        var tmp = {
          style: style
        };
        if (ensuredRef !== undefined) {
          tmp.ref = Caml_option.valFromOption(ensuredRef);
        }
        return React.createElement("div", tmp, children);
      }));

exports.make = make;
/* make Not a pure module */
