'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Runtime$Bisect = require("bisect_ppx/src/runtime/bucklescript/runtime.js");

var match = Runtime$Bisect.register_file(undefined, undefined, "/media/disk/home/mathieu/Sources/repro-bisect/src/ReasonUsingJSUsingReason/ReasonReactCard.re", 2, "\x84\x95\xa6\xbe\0\0\0\x0b\0\0\0\x03\0\0\0\t\0\0\0\t\xa0\xa0\x01\x01ZA\xa0\x01\x01v@");

var cb = match[1];

function ___bisect_post_visit___(point_index, result) {
  Curry._1(cb, point_index);
  return result;
}

var Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReasonUsingJSUsingReason___ReasonReactCard___re = {
  ___bisect_visit___: cb,
  ___bisect_post_visit___: ___bisect_post_visit___
};

function ReasonReactCard(Props) {
  var style = Props.style;
  Curry._1(cb, 1);
  return React.createElement("div", {
              style: style
            }, (Curry._1(cb, 0), "This is a ReasonReact card"));
}

var make = ReasonReactCard;

exports.Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReasonUsingJSUsingReason___ReasonReactCard___re = Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReasonUsingJSUsingReason___ReasonReactCard___re;
exports.make = make;
/* match Not a pure module */
