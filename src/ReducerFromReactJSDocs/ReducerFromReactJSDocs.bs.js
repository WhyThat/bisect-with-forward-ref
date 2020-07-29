'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Runtime$Bisect = require("bisect_ppx/src/runtime/bucklescript/runtime.js");

var match = Runtime$Bisect.register_file(undefined, undefined, "/media/disk/home/mathieu/Sources/repro-bisect/src/ReducerFromReactJSDocs/ReducerFromReactJSDocs.re", 19, "\x84\x95\xa6\xbe\0\0\0d\0\0\0\x14\0\0\0M\0\0\0M\b\0\0L\0\xa0\x01\0\xff@\xa0\x01\x01aA\xa0\x01\x02TD\xa0\x01\x02lB\xa0\x01\x02\x96C\xa0\x01\x02\xebR\xa0\x01\x03\x87Q\xa0\x01\x03\xabE\xa0\x01\x04\x02I\xa0\x01\x04\x17F\xa0\x01\x047H\xa0\x01\x04EG\xa0\x01\x04hP\xa0\x01\x04wL\xa0\x01\x04\xa2J\xa0\x01\x04\xccK\xa0\x01\x04\xf0O\xa0\x01\x05\x1cM\xa0\x01\x05FN");

var cb = match[1];

function ___bisect_post_visit___(point_index, result) {
  Curry._1(cb, point_index);
  return result;
}

var Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReducerFromReactJSDocs___ReducerFromReactJSDocs___re = {
  ___bisect_visit___: cb,
  ___bisect_post_visit___: ___bisect_post_visit___
};

var result = {
  width: "48px",
  borderRadius: "4px 0px 0px 4px"
};

Curry._1(cb, 0);

var result$1 = {
  width: "48px",
  borderRadius: "0px 4px 4px 0px"
};

Curry._1(cb, 1);

var initialState = {
  count: 0
};

function reducer(state, action) {
  Curry._1(cb, 4);
  if (action) {
    Curry._1(cb, 3);
    return {
            count: state.count - 1 | 0
          };
  } else {
    Curry._1(cb, 2);
    return {
            count: state.count + 1 | 0
          };
  }
}

function ReducerFromReactJSDocs(Props) {
  Curry._1(cb, 18);
  var result$2 = React.useReducer(reducer, initialState);
  Curry._1(cb, 17);
  var dispatch = result$2[1];
  var result$3 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };
  var result$4 = String(result$2[0].count);
  var result$5 = React.createElement("div", undefined, (Curry._1(cb, 6), "Count: "), (Curry._1(cb, 7), Curry._1(cb, 8), result$4));
  var result$6 = React.createElement("button", {
        style: result,
        onClick: (function (_event) {
            Curry._1(cb, 10);
            return Curry._1(dispatch, /* Decrement */1);
          })
      }, (Curry._1(cb, 11), "-"));
  var result$7 = React.createElement("button", {
        style: result$1,
        onClick: (function (_event) {
            Curry._1(cb, 13);
            return Curry._1(dispatch, /* Increment */0);
          })
      }, (Curry._1(cb, 14), "+"));
  var result$8 = React.createElement("div", undefined, (Curry._1(cb, 12), result$6), (Curry._1(cb, 15), result$7));
  return React.createElement("div", {
              style: (Curry._1(cb, 5), result$3)
            }, (Curry._1(cb, 9), result$5), (Curry._1(cb, 16), result$8));
}

var leftButtonStyle = result;

var rightButtonStyle = result$1;

var make = ReducerFromReactJSDocs;

exports.Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReducerFromReactJSDocs___ReducerFromReactJSDocs___re = Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReducerFromReactJSDocs___ReducerFromReactJSDocs___re;
exports.leftButtonStyle = leftButtonStyle;
exports.rightButtonStyle = rightButtonStyle;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* match Not a pure module */
